import React from 'react'
import renderer from 'react-test-renderer'
import Criteria from '../Criteria'
import { stub } from '../../../types/Criterion'
import { noop } from '../../../lib/utils'

const criteria = [
  stub({ label: 'Problem Solving' }),
  stub({ label: 'Self Reflection' }),
]

describe('<Criteria />', () => {
  it('shows the correct snapshot tree for the <Criteria> module', () => {
    const component = (
      <Criteria
        criteria={criteria}
        handleChange={{ noop }}
        location={{ key: '1' }}
        refetch={{ noop }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
