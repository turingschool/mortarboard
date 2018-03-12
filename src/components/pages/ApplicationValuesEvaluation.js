// @flow
import React from 'react'
import ApplicationEvaluationContainer from '../../containers/ApplicationEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default () => (
  <div>
    <PageTitle>Values Evaluation</PageTitle>
    <ApplicationEvaluationContainer />
    { false &&
      <EvaluationsContainer type="Values" />
    }
  </div>
)

// TODO: Disabled EvaluationsContainer till API is ready
