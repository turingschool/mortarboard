// @flow
import type { Applicant } from './Applicant'

export type Application = {
  applicant: Applicant,
  complete: boolean,
  id: ID,
  scoreLogicEvaluation: Int | null,
  scoreOnlineLogicTest: Int | null,
  scoreValuesEvaluation: Int | null,
}
