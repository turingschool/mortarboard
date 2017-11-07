// @flow
import type { Evaluation } from './Evaluation'

export type Criterion = {
  createdAt: DateTime,
  evaluation: Evaluation | null,
  id: ID,
  name: string,
  label: string,
  options: Array<string>,
  questions: Array<string>,
  updatedAt: DateTime,
}
