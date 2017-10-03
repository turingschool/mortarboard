// @flow
import React from 'react'
import { Div } from 'glamorous'
import AppContainment from '../components/elements/AppContainment'
import Heading from '../components/elements/Heading'
import SectionContainment from '../components/elements/SectionContainment'

export default() => (
  <Div width="100%">
    <AppContainment>
      <SectionContainment>
        <Heading>Values Evaluation</Heading>
      </SectionContainment>
    </AppContainment>
  </Div>
)
