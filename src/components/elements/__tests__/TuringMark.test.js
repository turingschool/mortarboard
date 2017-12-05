import React from 'react'
import renderer from 'react-test-renderer'
import TuringMark from '../TuringMark'

describe('<TuringMark />', () => {
  it('shows the correct snapshot tree for the <TuringMark> element', () => {
    const component = <TuringMark />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <TuringMark> element with options', () => {
    const component = (
      <TuringMark width={64} height={64} />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
