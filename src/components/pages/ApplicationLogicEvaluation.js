// @flow
import React from 'react'
import ApplicationEvaluationContainer from '../../containers/ApplicationEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default () => (
  <div>
    <PageTitle>Logic Evaluation</PageTitle>
    <ApplicationEvaluationContainer />
    { false &&
      <EvaluationsContainer type="Logic" />
    }
  </div>
)

// TODO: Disabled EvaluationsContainer till API is ready
