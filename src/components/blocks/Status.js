// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import DdBase from '../elements/Dd'
import Dl from '../elements/Dl'
import DtBase from '../elements/Dt'
import TextLink from '../elements/TextLink'
import { RocketIcon } from '../elements/Icons'

type Props = {
  children: Node,
  to?: string | null,
}

const Status = ({ children, to, ...props }: Props) => (
  <Dl {...props}>
    <Dt>Application Status</Dt>
    <Dd>
      <RocketIcon marginRight={16} />
      {children}
    </Dd>
    { to != null &&
      <Dd>
        <TextLink to={to}>Change Status</TextLink>
      </Dd>
    }
  </Dl>
)

Status.defaultProps = {
  to: null,
}

export default Status

// -------------------------------------

const Dd = glamorous(DdBase)({
  marginTop: 16,
  fontSize: 18,
  fontWeight: 400,
  textTransform: 'uppercase',
  color: '#333',
})

const Dt = glamorous(DtBase)({
  color: '#999',
})
