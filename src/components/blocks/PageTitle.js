// @flow
import React from 'react'
import SectionContainment from '../elements/SectionContainment'
import Title from '../elements/Title'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <SectionContainment {...props}>
    <Title>
      {children}
    </Title>
  </SectionContainment>
)
