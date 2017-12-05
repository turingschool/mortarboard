import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../Title'

describe('<Title />', () => {
  it('shows the correct snapshot tree for the <Title> element', () => {
    const component = <Title>The Title</Title>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Title> element with options', () => {
    const component = (
      <Title color="purple" fontSize={64} mt={8}>
        The Title with options
      </Title>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
