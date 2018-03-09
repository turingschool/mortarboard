// @flow
import { camelize } from 'humps'
import { compose, prop, split, head, last } from 'ramda'
import type { Action } from './Action'
import type { Application } from './Application'

export default undefined

export type Applicant = {
  action: ?Action,
  applications: Array<Application>,
  birthDate: ?string,
  createdAt: DateTime,
  email: string,
  github: string,
  id: ID,
  name: string,
  referredBy: ?string,
  resume: ?string,
  startDate: ?DateTime,
  status: ?string,
  updatedAt: DateTime,
  // derived data...
  firstName: string,
  lastName: string,
}

// -------------------------------------
// Derived helpers

export const deriveFirstName = compose(
  head,
  split(' '),
  prop('name'),
)

export const deriveLastName = compose(
  last,
  split(' '),
  prop('name'),
)

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
    birthDate: '06/06/2006',
    createdAt: '2010-10-31T12:12:12.000Z',
    email: 'kenny.bania@example.com',
    firstName: 'Kenny',
    github: camel,
    lastName,
    referredBy: 'Simon Taranto',
    resume: 'https://www.resume.com',
    startDate: null,
    status: 'pending',
    updatedAt: '2010-12-24T24:24:24.000Z',
  }
  return {
    ...applicant,
    ...props,
  }
}
