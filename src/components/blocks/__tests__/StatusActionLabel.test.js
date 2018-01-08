import React from 'react'
import renderer from 'react-test-renderer'
import StatusActionLabel from '../StatusActionLabel'

describe('<StatusActionLabel />', () => {
  it('shows the correct snapshot tree for the <StatusActionLabel> block', () => {
    const component = (
      <StatusActionLabel status="Status action label" />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <StatusActionLabel inCard> block', () => {
    const component = (
      <StatusActionLabel inCard status="Status action label in card" />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
