import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import SendStatusDialog from '../SendStatusDialog'

describe('<SendStatusDialog />', () => {
  it('shows the correct snapshot tree for the <SendStatusDialog> module', () => {
    const component = (
      <SendStatusDialog
        handleCancel={noop}
        handleChange={noop}
        handleConfirm={noop}
        statusValue="Status Value"
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
