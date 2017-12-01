// @flow
import React from 'react'
import ApplicantEvaluationContainer from '../../containers/ApplicantEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default () => (
  <div>
    <PageTitle>Logic Evaluation</PageTitle>
    <ApplicantEvaluationContainer />
    <EvaluationsContainer type="Logic" />
  </div>
)
