import React from 'react'
import renderer from 'react-test-renderer'
import PageTitle from '../PageTitle'

describe('<PageTitle />', () => {
  it('shows the correct snapshot tree for the <PageTitle> block', () => {
    const component = <PageTitle>The Page Title</PageTitle>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
