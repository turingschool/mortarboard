// @flow
import React from 'react'
import Select from '../elements/Select'
import Dialog from '../blocks/Dialog'

type Props = {
  handleCancel: Function,
  handleChange: Function,
  handleConfirm: Function,
  recommendationValue: string,
}

export default(props: Props) => (
  <Dialog
    confirmLabel="Submit"
    handleCancel={props.handleCancel}
    handleConfirm={props.handleConfirm}
    title="What is Recommendation?"
  >
    <Select
      label="Choose Recommendation"
      name="recommendationSelect"
      onChange={props.handleChange}
      value={props.recommendationValue}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </Select>
  </Dialog>
)
