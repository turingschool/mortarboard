// @flow
import { __, addIndex, always, and, complement, either, gt, isEmpty, isNil, map } from 'ramda'
import { withProps } from 'recompose'

// -------------------------------------
// Environments
export const isDev = always(process.env.NODE_ENV === 'development')

// -------------------------------------
// Types
export const isNotNil = complement(isNil)
export const isNotEmpty = complement(isEmpty)
export const isEmptyOrNil = either(isNil, isEmpty)
export const isNotEmptyAndNotNil = and(isNotNil, isNotEmpty)

// -------------------------------------
// Relation
export const gt0 = gt(__, 0)

// -------------------------------------
// Lists
export const nool = always([])()
export const mapIndexed = addIndex(map)

// -------------------------------------
// Objects
export const noob = always({})()

// -------------------------------------
// Functions
export const noop = () => {}

export const log = withProps(props => (
  // eslint-disable-next-line no-console
  console.log(props.displayName || '👍', props) && props
))

export const warn = withProps(props => (
  // eslint-disable-next-line no-console
  console.warn(props.displayName || '⚠️', props) && props
))
