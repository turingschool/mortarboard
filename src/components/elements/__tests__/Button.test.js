import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button'

describe('<Button />', () => {
  it('shows the correct snapshot tree for the <Button> element', () => {
    const component = <Button>The Button</Button>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Button> element with composable options', () => {
    const component = (
      <Button box centered color="pink" mt={8}>
        The Composable Button
      </Button>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Button> element with primary option', () => {
    const component = <Button primary >The Primary Button</Button>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <Button> element with secondary option', () => {
    const component = <Button secondary >The Secondary Button</Button>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
