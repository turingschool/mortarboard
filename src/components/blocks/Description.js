// @flow
import React from 'react'
import Dd from '../elements/Dd'
import Dl from '../elements/Dl'
import Dt from '../elements/Dt'

const rowRule = {
  display: 'flex',
  flexFlow: 'row nowrap',
}

const rowDtRule = {
  minWidth: 192,
}

type Props = {
  children: React.Element<*>,
  isRow?: boolean,
  term: string,
}

const Description = ({ children, isRow, term, ...props }: Props) => (
  <Dl {...(isRow === true ? rowRule : {})} {...props}>
    <Dt {...(isRow === true ? rowDtRule : {})} >{term}</Dt>
    <Dd>{children}</Dd>
  </Dl>
)

Description.defaultProps = {
  isRow: false,
}

export default Description
