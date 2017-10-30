// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import SectionContainmentBase from '../elements/SectionContainment'
import Title from '../elements/Title'

type Props = {
  children: Node,
}

export default ({ children, ...props }: Props) => (
  <SectionContainment {...props}>
    <Title>
      {children}
    </Title>
  </SectionContainment>
)

const SectionContainment = glamorous(SectionContainmentBase)({
  marginBottom: 6,
})
