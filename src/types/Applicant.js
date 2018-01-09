// @flow
import { camelize } from 'humps'
import type { Action } from './Action'
import type { Application } from './Application'

export type Applicant = {
  action: ?Action,
  applications: Array<Application>,
  birthdate: ?string,
  createdAt: DateTime,
  email: string,
  firstName: string,
  github: string,
  id: ID,
  lastName: string,
  referredBy: ?string,
  resume: ?string,
  startDate: ?DateTime,
  status: ?string,
  updatedAt: DateTime,
}

// -------------------------------------
// For testing content
export const stub = (props: Applicant) => {
  const firstName = (props != null && props.firstName) || 'Kenny'
  const lastName = (props != null && props.lastName) || 'Bania'
  const camel = camelize(`${firstName} ${lastName}`)
  const applicant = {
    id: camel,
    action: null,
    applications: [],
    birthdate: '06/06/2006',
    createdAt: '2017-10-31T12:12:12.000Z',
    email: 'kenny.bania@example.com',
    firstName: 'Kenny',
    github: camel,
    lastName,
    referredBy: 'Simon Taranto',
    resume: 'https://www.resume.com',
    startDate: null,
    status: 'pending',
    updatedAt: '2017-12-24T24:24:24.000Z',
  }
  return {
    ...applicant,
    ...props,
  }
}

export default undefined
