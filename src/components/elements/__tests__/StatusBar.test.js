import React from 'react'
import renderer from 'react-test-renderer'
import StatusBar from '../StatusBar'

describe('<StatusBar />', () => {
  it('shows the correct snapshot tree for the <StatusBar> element', () => {
    const component = <StatusBar />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
