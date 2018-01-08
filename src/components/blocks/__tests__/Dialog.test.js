import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import Dialog from '../Dialog'

describe('<Dialog />', () => {
  it('shows the correct snapshot tree for the <Dialog> block', () => {
    const component = (
      <Dialog
        cancelLabel="Cancel Label"
        confirmLabel="Confirm Label"
        handleCancel={noop}
        handleConfirm={noop}
        title="Title"
      >
        Dialog Children
      </Dialog>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
