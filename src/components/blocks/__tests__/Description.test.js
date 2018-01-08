import React from 'react'
import renderer from 'react-test-renderer'
import Description from '../Description'

describe('<Description />', () => {
  it('shows the correct snapshot tree for the <Description> block', () => {
    const component = (
      <Description term="Term">
        <span>Definition</span>
      </Description>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Description> block as a row', () => {
    const component = (
      <Description isRow term="Term Row">
        <span>Definition Row</span>
      </Description>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
