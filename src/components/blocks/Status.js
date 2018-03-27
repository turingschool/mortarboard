// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { alignItems, space } from 'styled-system'
import { isNotNil } from '../../lib/utils'
import TextButton from '../elements/TextButton'
import { RocketIcon } from '../elements/Icons'
import { COLORS } from '../../constants/theme'

type Props = {
  children: Node,
  onClick?: ?() => {},
}

const Status = ({ children, onClick, ...props }: Props) => (
  <Dl {...props}>
    <Dt>Application Status</Dt>
    <Dd>
      <RocketIcon marginRight={8} />
      {children}
    </Dd>
    { isNotNil(onClick) &&
      <Dd>
        <TextButton fontSize={16} onClick={onClick}>
          Change Status
        </TextButton>
      </Dd>
    }
  </Dl>
)

Status.defaultProps = {
  onClick: null,
}

export default Status

// -------------------------------------

const Dl = glamorous.dl(
  {
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
  display: 'flex',
  alignItems: 'center',
  marginTop: 16,
  marginLeft: 0,
  fontSize: 14,
  fontWeight: 400,
  textTransform: 'uppercase',
  color: COLORS.GREY_4,
})
