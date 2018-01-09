// @flow
import { camelize } from 'humps'
import type { Applicant } from './Applicant'

export type Action = {
  applicants: Array<Applicant>,
  id: ID,
  label: string,
  message: string,
  name: string,
}

// -------------------------------------
// For testing content
export const stub = (props: Action) => {
  const label = (props != null && props.label) || 'Mismatch'
  const camel = camelize(label)
  return {
    id: camel,
    label,
    message: `${label} message`,
    name: camel,
    ...props,
  }
}

export default undefined
