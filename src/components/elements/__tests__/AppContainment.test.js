import React from 'react'
import renderer from 'react-test-renderer'
import AppContainment from '../AppContainment'

describe('<AppContainment />', () => {
  it('shows the correct snapshot tree for the <AppContainment> element', () => {
    const component = <AppContainment />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <AppContainment> element with options', () => {
    const component = (
      <AppContainment my="auto" px={16} py={16} />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
