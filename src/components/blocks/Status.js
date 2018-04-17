// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { alignItems, space } from 'styled-system'
import { isNotNil } from '../../lib/utils'
import Button from '../elements/Button'
import { RocketIcon } from '../elements/Icons'
import { COLORS } from '../../constants/theme'

type Props = {
  id: string,
  children: Node,
  onClick?: ?() => void,
}

const Status = ({ id, children, onClick, ...props }: Props) => (
  <Dl {...props}>
    <Dt>Application Status</Dt>
    <Dd>
      { isNotNil(onClick) ?
        <Button box centered primary onClick={onClick} data-id={id}>
          {children}
        </Button> :
        <Text>
          <RocketIcon marginRight={8} />
          {children}
        </Text>
      }
    </Dd>
  </Dl>
)

Status.defaultProps = {
  onClick: null,
}

export default Status

// -------------------------------------

const Dl = glamorous.dl(
  {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
  },
  alignItems,
  space,
)

const Dt = glamorous.dt({
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: COLORS.GREY_9,
})

const Dd = glamorous.dd({
  marginTop: 8,
  marginLeft: 0,
})

const Text = glamorous.span({
  display: 'flex',
  alignItems: 'center',
  marginTop: 8,
  fontSize: 14,
  fontWeight: 400,
  textTransform: 'uppercase',
  color: COLORS.GREY_4,
})
