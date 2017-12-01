// @flow
import React, { type Node } from 'react'
import SectionContainment from '../elements/SectionContainment'
import Title from '../elements/Title'

type Props = {
  children: Node,
}

export default ({ children, ...props }: Props) => (
  <SectionContainment mb={6} {...props}>
    <Title>
      {children}
    </Title>
  </SectionContainment>
)
