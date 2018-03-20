// @flow
import type { Applicant } from './Applicant'
import type { Evaluator } from './Evaluator'

export type Application = {
  applicant: Applicant,
  complete: boolean,
  evaluators: ?Array<Evaluator>,
  id: ID,
  scoreLogicEvaluation: ?Int,
  scoreOnlineLogicTest: ?Int,
  scoreValuesEvaluation: ?Int,
}

// -------------------------------------
// For testing content
export const stub = (props: Application) => {
  const application = {
    id: '1',
    complete: false,
    evaluators: null,
    scoreLogicEvaluation: 20,
    scoreOnlineLogicTest: 40,
    scoreValuesEvaluation: 20,
  }
  return {
    ...application,
    ...props,
  }
}

export default undefined
