import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { noop } from '../../../lib/utils'
import NavBar from '../NavBar'

describe('<NavBar />', () => {
  it('shows the correct snapshot tree for the <NavBar> module', () => {
    const component = (
      <MemoryRouter>
        <NavBar
          goBack={noop}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
