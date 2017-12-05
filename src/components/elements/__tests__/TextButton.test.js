import React from 'react'
import renderer from 'react-test-renderer'
import TextButton from '../TextButton'

describe('<TextButton />', () => {
  it('shows the correct snapshot tree for the <TextButton> element', () => {
    const component = <TextButton >The TextButton</TextButton>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <TextButton> element with options', () => {
    const component = (
      <TextButton color="green" fontSize={18} mt={8}>
        The TextButton with options
      </TextButton>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
