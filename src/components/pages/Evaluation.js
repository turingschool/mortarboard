// @flow
import React from 'react'
import ApplicationEvaluationContainer from '../../containers/ApplicationEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import EvaluationTitle from '../../containers/EvaluationTitle'

export default () => (
  <div>
    <EvaluationTitle />
    <ApplicationEvaluationContainer />
    <EvaluationsContainer />
  </div>
)
