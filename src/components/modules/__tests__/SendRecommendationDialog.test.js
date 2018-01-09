import React from 'react'
import renderer from 'react-test-renderer'
import { noop } from '../../../lib/utils'
import SendRecommendationDialog from '../SendRecommendationDialog'

describe('<SendRecommendationDialog />', () => {
  it('shows the correct snapshot tree for the <SendRecommendationDialog> module', () => {
    const component = (
      <SendRecommendationDialog
        handleCancel={noop}
        handleChange={noop}
        handleConfirm={noop}
        recommendationValue="Recommendation Value"
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
