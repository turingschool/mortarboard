// @flow
import React from 'react'
import { Div } from 'glamorous'
import ApplicantEvaluationContainer from '../../containers/ApplicantEvaluationContainer'
import EvaluationsContainer from '../../containers/EvaluationsContainer'
import PageTitle from '../blocks/PageTitle'

export default() => (
  <Div>
    <PageTitle>Values Evaluation</PageTitle>
    <ApplicantEvaluationContainer />
    <EvaluationsContainer type="values" />
  </Div>
)
