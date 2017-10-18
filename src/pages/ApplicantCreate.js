// @flow
import React from 'react'
import { Div } from 'glamorous'
import ApplicantCreate from '../containers/ApplicantCreateContainer'
import PageTitle from '../components/blocks/PageTitle'

export default() => (
  <Div>
    <PageTitle>Create Applicant</PageTitle>
    <ApplicantCreate />
  </Div>
)
