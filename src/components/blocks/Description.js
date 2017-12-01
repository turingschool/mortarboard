// @flow
import React, { type Node } from 'react'
import { color } from 'styled-system'
import glamorous from 'glamorous'
import { noob } from '../../lib/utils'

type Props = {
  children: Node,
  isRow?: boolean,
  term: string,
}

const Description = ({ children, isRow, term, ...props }: Props) => (
  <Dl isRow={isRow} {...props}>
    <Dt isRow={isRow} >{term}</Dt>
    <Dd>{children}</Dd>
  </Dl>
)

Description.defaultProps = {
  isRow: false,
}

export default Description

// -------------------------------------

const rowDlRule = {
  flexFlow: 'row nowrap',
}

const Dl = glamorous.dl(
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
    color: 'currentColor',
  },
  props => ({
    ...(props.isRow ? rowDlRule : noob),
  }),
  color,
)

const rowDtRule = {
  minWidth: 192,
}

const Dt = glamorous.dt(
  {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'currentColor',
  },
  props => ({
    ...(props.isRow ? rowDtRule : noob),
  }),
)

const Dd = glamorous.dd({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 0,
  fontSize: 16,
  fontWeight: 200,
  color: 'currentColor',
})
