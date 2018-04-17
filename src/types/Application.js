// @flow
import { compose, contains, prop, replace } from 'ramda'
import { capitalize } from '../lib/utils'
import type { Applicant } from './Applicant'
import type { Evaluator } from './Evaluator'

export type Application = {
  id: ID,
  applicant: Applicant,
  complete: boolean,
  evaluators: ?Array<Evaluator>,
  resume: ?string,
  scoreLogicEvaluation: ?Int,
  scoreOnlineLogicTest: ?Int,
  scoreValuesEvaluation: ?Int,
  status: string,
  // derived...
  isStatusMutatable: boolean,
  statusLabel: string,
}

// -------------------------------------
// Derived helpers

export const deriveIsStatusMutatable = compose(
  contains('needs'),
  prop('status'),
)

export const deriveStatusLabel = compose(
  capitalize,
  replace(/_/gi, ' '),
  prop('status'),
)

// -------------------------------------
// For testing content
export const stub = (props: Application) => {
  const application = {
    id: '1',
    complete: false,
    evaluators: null,
    isStatusMutatable: false,
    resume: 'uploads/asset/application-resume.pdf',
    scoreLogicEvaluation: 20,
    scoreOnlineLogicTest: 40,
    scoreValuesEvaluation: 20,
    status: 'pending',
    statusLabel: 'Pending',
  }
  return {
    ...application,
    ...props,
  }
}

export default undefined
