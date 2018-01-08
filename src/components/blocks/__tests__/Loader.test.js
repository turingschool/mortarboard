import React from 'react'
import renderer from 'react-test-renderer'
import Loader from '../Loader'

describe('<Loader />', () => {
  it('shows the correct snapshot tree for the <Loader> block', () => {
    const component = (
      <Loader>Loading Loader...</Loader>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
