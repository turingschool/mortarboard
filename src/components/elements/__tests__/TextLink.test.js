import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import TextLink from '../TextLink'

describe('<TextLink />', () => {
  it('shows the correct snapshot tree for the <TextLink> element', () => {
    const component = (
      <MemoryRouter>
        <TextLink href="https://www.turing.io">The TextLink</TextLink>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <TextLink> element with options', () => {
    const component = (
      <MemoryRouter>
        <TextLink to="/hello" color="magenta" fontSize={18} mt={8}>
          The TextLink with options
        </TextLink>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
