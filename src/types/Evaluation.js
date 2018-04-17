// @flow
import { propOr } from 'ramda'
import type { Criterion } from './Criterion'

export type Evaluation = {
  id: ID,
  criteria: Array<Criterion>,
  slug: ID,
  title: string,
}

// -------------------------------------
// For testing content
export const stub = (props: Evaluation) => {
  const id = propOr('1', 'id', props)
  const evaluation = {
    id,
    criteria: [],
    slug: `slug_${id}`,
    title: `Evaluation ${id}`,
  }
  return {
    ...evaluation,
    ...props,
  }
}

export default undefined
