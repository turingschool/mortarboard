import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import ConfirmDialog from '../ConfirmDialog'

describe('<ConfirmDialog />', () => {
  it('shows the correct snapshot tree for the <ConfirmDialog> module', () => {
    const component = (
      <ConfirmDialog
        handleCancel={noop}
        handleConfirm={noop}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
