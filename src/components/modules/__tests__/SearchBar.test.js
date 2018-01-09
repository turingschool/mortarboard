import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import SearchBar from '../SearchBar'

describe('<SearchBar />', () => {
  it('shows the correct snapshot tree for the <SearchBar> module (no value)', () => {
    const component = (
      <SearchBar
        action="/searchbar-test"
        forId="forId"
        handleChange={noop}
        handleSubmit={noop}
        value=""
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <SearchBar> module (with value)', () => {
    const component = (
      <SearchBar
        action="/searchbar-test-2"
        forId="forId2"
        handleChange={noop}
        handleSubmit={noop}
        value="Foo"
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
