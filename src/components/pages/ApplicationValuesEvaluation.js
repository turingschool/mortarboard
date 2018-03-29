// @flow
import React from 'react'
import ApplicationEvaluationContainer from '../../containers/ApplicationEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default () => (
  <div>
    <PageTitle>Values Evaluation</PageTitle>
    <ApplicationEvaluationContainer />
    <EvaluationsContainer type="1" />
  </div>
)
