import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import Status from '../Status'

describe('<Status />', () => {
  it('shows the correct snapshot tree for the <Status> block (with click)', () => {
    const component = (
      <Status onClick={noop}>
        Status children with click
      </Status>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Status> block (without click)', () => {
    const component = (
      <Status>
        Status children no click
      </Status>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
