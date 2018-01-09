// @flow
import { camelize } from 'humps'
import type { Evaluation } from './Evaluation'

export type Criterion = {
  id: ID,
  createdAt: DateTime,
  evaluation: ?Evaluation,
  label: string,
  name: string,
  options: Array<string>,
  questions: Array<string>,
  updatedAt: DateTime,
}

// -------------------------------------
// For testing content
export const stub = (props: Criterion) => {
  const label = (props != null && props.label) || 'Problem Solving'
  const camel = camelize(label)
  return {
    id: camel,
    label,
    name: camel,
    options: [
      `${label} Option 3`,
      `${label} Option 2`,
      `${label} Option 1`,
    ],
    questions: [
      `${label} Question 1`,
      `${label} Question 2`,
      `${label} Question 3`,
    ],
    ...props,
  }
}

export default undefined
