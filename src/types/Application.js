// @flow
import { both, compose, either, prop, propSatisfies, replace, test } from 'ramda'
import { capitalize, gt0 } from '../lib/utils'
import type { Applicant } from './Applicant'
import type { Evaluator } from './Evaluator'
import type { Evaluation } from './Evaluation'

export type Application = {
  id: ID,
  applicant: Applicant,
  complete: boolean,
  evaluations: Array<Evaluation>,
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

/*
export type StatusType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
export const STATUS = Object.freeze({
  pending: 0,
  needs_initial_evaluation_scores: 1,
  needs_rejected_at_initial_evaluation_notification: 2,
  rejected_at_initial_evaluation: 3,
  needs_to_schedule_interview: 4,
  needs_interview_scores: 5,
  needs_rejected_at_interview_notification: 6,
  rejected_at_interview: 7,
  needs_logic_evaluation_scores: 8,
  needs_rejected_at_logic_evaluation_notification: 9,
  rejected_at_logic_evaluation: 10,
  needs_invitation: 11,
  needs_invitation_response: 12,
  declined_invitation: 13,
  accepted_invitation: 14,
})
*/

export const needsSendStatus = compose(
  test(/^needs_rej|needs_invitation$/),
  prop('status'),
)

export const needsSubmitEvaluation = compose(
  test(/_evaluation_scores$|^needs_interview/),
  prop('status'),
)

export const deriveIsStatusMutatable = either(
  propSatisfies(test(/^needs_rej|needs_invitation$|_evaluation_scores$/), 'status'),
  both(
    propSatisfies(test(/^needs_interview/), 'status'),
    propSatisfies(gt0, 'scoreOnlineLogicTest'),
  ),
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
    evaluations: [],
    evaluators: null,
    isStatusMutatable: false,
    resume: 'uploads/asset/application-resume.pdf',
    scoreLogicEvaluation: 20,
    scoreOnlineLogicTest: 40,
    scoreValuesEvaluation: 20,
    showScores: true,
    status: 'pending',
    statusLabel: 'Pending',
  }
  return {
    ...application,
    ...props,
  }
}

export default undefined
