// @flow
import { camelize } from 'humps'
import { compose, prop } from 'ramda'
import type { Evaluation } from './Evaluation'

export type Criterion = {
  id: ID,
  createdAt: DateTime,
  evaluation: ?Evaluation,
  title: string,
  options: Array<string>,
  questions: Array<string>,
  updatedAt: DateTime,
  // derived...
  name: string,
}

// -------------------------------------
// Derived helpers

export const deriveName = compose(
  camelize,
  prop('title'),
)

// -------------------------------------
// For testing content
export const stub = (props: Criterion) => {
  const title = (props != null && props.title) || 'Problem Solving'
  const camel = camelize(title)
  return {
    id: camel,
    title,
    name: camel,
    options: [
      `${title} Option 3`,
      `${title} Option 2`,
      `${title} Option 1`,
    ],
    questions: [
      `${title} Question 1`,
      `${title} Question 2`,
      `${title} Question 3`,
    ],
    ...props,
  }
}

export default undefined
