import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '../Heading'

describe('<Heading />', () => {
  it('shows the correct snapshot tree for the <Heading> element', () => {
    const component = <Heading>The Heading</Heading>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Heading> element with options', () => {
    const component = (
      <Heading color="magenta" fontSize={18} mt={8}>
        The Heading with options
      </Heading>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
