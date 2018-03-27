// @flow
import { __,
  addIndex,
  always,
  complement,
  compose,
  either,
  gt,
  isEmpty,
  isNil,
  join,
  map,
  replace,
  split,
  toUpper,
} from 'ramda'
import { withProps } from 'recompose'

// -------------------------------------
// Environments
export const isDev = always(process.env.NODE_ENV === 'development')
export const isWindowUndefined = always((typeof window === 'undefined'))
export const isWindowDefined = always(complement(isWindowUndefined))

// -------------------------------------
// Types & Logic
export const isNotNil = complement(isNil)
export const isNotEmpty = complement(isEmpty)
export const isEmptyOrNil = either(isNil, isEmpty)
export const isNotEmptyOrNotNil = complement(isEmptyOrNil)

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

// -------------------------------------
// Strings
export const capitalize = compose(
  join(' '),
  map(word => replace(/^./, toUpper, word)),
  split(' '),
)
