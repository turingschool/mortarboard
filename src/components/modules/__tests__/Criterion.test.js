import React from 'react'
import renderer from 'react-test-renderer'
import Criterion from '../Criterion'
import { noop } from '../../../lib/utils'
import { stub } from '../../../types/Criterion'

describe('<Criterion />', () => {
  it('shows the correct snapshot tree for the <Criterion> module', () => {
    const component = (
      <Criterion criterion={stub()} handleChange={noop} />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
