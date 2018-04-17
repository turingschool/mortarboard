// @flow

export default undefined

export const APPLICATION_STATUS = Object.freeze({
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
