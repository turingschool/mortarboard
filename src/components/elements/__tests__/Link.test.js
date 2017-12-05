/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Link from '../Link'

describe('<Link />', () => {
  it('shows the correct snapshot tree for the <Link href> element', () => {
    const component = (
      <MemoryRouter>
        <Link href="https://www.turing.io">The External Link</Link>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Link to> element', () => {
    const component = (
      <MemoryRouter>
        <Link to="/hello">The Router Link</Link>
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
