// @flow
import type { Action } from './Action'
import type { Application } from './Application'

export type Applicant = {
  action: Action | null,
  applications: Array<Application>,
  birthdate: string | null,
  createdAt: DateTime,
  email: string,
  firstName: string,
  github: string,
  id: ID,
  lastName: string,
  referredBy: string | null,
  resume: string | null,
  startDate: DateTime | null,
  status: string | null,
  updatedAt: DateTime,
}
