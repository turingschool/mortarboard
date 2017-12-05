import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import HitLink from '../HitLink'

describe('<HitLink />', () => {
  it('shows the correct snapshot tree for the <HitLink> element', () => {
    const component = (
      <MemoryRouter>
        <HitLink to="/hello">The HitLink</HitLink>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
