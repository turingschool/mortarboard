import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Layout from '../Layout'

describe('/login', () => {
  it('shows the correct snapshot tree for the Layout template', () => {
    const component = (
      <MemoryRouter>
        <Layout>
          <div>Children</div>
        </Layout>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
