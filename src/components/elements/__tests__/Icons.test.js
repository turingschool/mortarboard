import renderer from 'react-test-renderer'
import { and, complement, compose, equals, is, keys, map, when } from 'ramda'
import * as Icons from '../Icons'

const notEqual = complement(equals)

const isRenderable = key => and(
  is(Function, Icons[key]),
  notEqual(key, 'default'),
)

const test = key => (
  it(`shows the correct snapshot tree for the <${key}> icon element`, () => {
    const component = Icons[key]()
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
)

describe('<Icons />', () => {
  compose(
    map(key => when(isRenderable, test, key)),
    keys,
  )(Icons)
})
