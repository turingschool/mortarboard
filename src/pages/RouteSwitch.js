// @flow
import React from 'react'
import { withRouter } from 'react-router-dom'
import { AnimatedSwitch, spring } from 'react-router-transition'
import { css } from 'glamor'
import type { LocationType } from '../types/flowtypes'

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

type Props = {
  children: React.Element<*>,
  location: LocationType,
}

type State = {
  locationLength: number,
  motion: {
    atEnter: { offset: number },
    atActive: { offset: number },
    atLeave: { offset: number },
  },
}

class RouteSwitch extends React.PureComponent {
  props: Props
  state: State = {
    locationLength: 0,
    motion: motionRightToLeft,
  }

  componentWillReceiveProps(nextProps) {
    const { locationLength: prevLocationLength } = this.state
    const locationLength = nextProps.location.pathname.split('/').length
    const motion = locationLength < prevLocationLength ? motionLeftToRight : motionRightToLeft
    this.setState(() => ({ motion, locationLength }))
  }

  render() {
    const { children } = this.props
    const { motion } = this.state
    return (
      <AnimatedSwitch
        {...motion}
        className={`${style}`}
        mapStyles={mapStyles}
      >
        { children }
      </AnimatedSwitch>
    )
  }
}

export default withRouter(RouteSwitch)
