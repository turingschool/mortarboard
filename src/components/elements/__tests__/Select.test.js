import React from 'react'
import renderer from 'react-test-renderer'
import Select from '../Select'
import { noop } from '../../../lib/utils'

describe('<Select />', () => {
  it('shows the correct snapshot tree for the <Select> element', () => {
    const component = (
      <Select label="Score" name="select-name" onChange={noop} value={null}>
        <option value={null}>Score</option>
        <option value={0}>0 - Bad</option>
        <option value={1}>1 - Meh</option>
        <option value={2}>2 - Good</option>
        <option value={3}>3 - Excellent</option>
      </Select>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
