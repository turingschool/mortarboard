// @flow
import type { Applicant } from './Applicant'

export type Action = {
  applicants: Array<Applicant>,
  id: ID,
  label: string,
  message: string,
  name: string,
}
