import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Login from '../Login'

describe('/login', () => {
  it('shows the correct snapshot tree for the /login page', () => {
    const component = (
      <MemoryRouter>
        <Login history={[]} />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
