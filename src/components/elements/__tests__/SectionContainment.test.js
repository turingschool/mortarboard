import React from 'react'
import renderer from 'react-test-renderer'
import SectionContainment from '../SectionContainment'

describe('<SectionContainment />', () => {
  it('shows the correct snapshot tree for the <SectionContainment> element', () => {
    const component = <SectionContainment />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <SectionContainment> element with options', () => {
    const component = (
      <SectionContainment my="auto" px={24} py={24} />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
