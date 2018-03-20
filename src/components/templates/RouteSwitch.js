// @flow
import React from 'react'
import type { Location } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { AnimatedSwitch, spring } from 'react-router-transition'
import { identity, memoizeWith } from 'ramda'
import { css } from 'glamor'

const glide = val => spring(val, { stiffness: 175, damping: 25 })

const mapStyles = styles => ({
  transform: `translate3d(${styles.offset}%, 0, 0)`,
})

const style = css({
  position: 'relative',
  '& > div': {
    position: 'absolute',
    width: '100%',
  },
})

const motionRightToLeft = {
  atEnter: { offset: 100 },
  atActive: { offset: glide(0) },
  atLeave: { offset: glide(-100) },
}

const motionLeftToRight = {
  atEnter: { offset: -100 },
  atActive: { offset: glide(0) },
  atLeave: { offset: glide(100) },
}

const getPathnameLength = memoizeWith(identity, pathname => pathname.split('/').length)

type Props = {
  location: Location,
}

type State = {
  locationLength: number,
  motion: {
    atEnter: { offset: number },
    atActive: { offset: number },
    atLeave: { offset: number },
  },
}

class RouteSwitch extends React.PureComponent<Props, State> {
  state: State = {
    locationLength: getPathnameLength(this.props.location.pathname),
    motion: motionRightToLeft,
  }

  componentWillReceiveProps(nextProps) {
    const { locationLength: prevLocationLength } = this.state
    const locationLength = getPathnameLength(nextProps.location.pathname)
    const motion = locationLength < prevLocationLength ? motionLeftToRight : motionRightToLeft
    this.setState(() => ({ motion, locationLength }))
    window.scrollTo(0, 0)
  }

  render() {
    const { motion } = this.state
    return (
      <AnimatedSwitch
        {...motion}
        className={`${style}`}
        mapStyles={mapStyles}
        {...this.props}
      />
    )
  }
}

export default withRouter(RouteSwitch)
