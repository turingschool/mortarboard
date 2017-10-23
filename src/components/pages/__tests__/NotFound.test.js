import React from 'react'
import renderer from 'react-test-renderer'
import NotFound from '../NotFound'

describe('/404', () => {
  let component

  beforeEach(() => {
    component = (
      <NotFound />
    )
  })

  it('shows the correct snapshot tree for the /404 page', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
