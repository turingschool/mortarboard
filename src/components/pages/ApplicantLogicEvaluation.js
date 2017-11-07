// @flow
import React from 'react'
import { Div } from 'glamorous'
import ApplicantEvaluationContainer from '../../containers/ApplicantEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default() => (
  <Div>
    <PageTitle>Logic Evaluation</PageTitle>
    <ApplicantEvaluationContainer />
    <EvaluationsContainer type="Logic" />
  </Div>
)
