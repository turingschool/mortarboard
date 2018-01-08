import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import EvaluationSummary from '../EvaluationSummary'

describe('<EvaluationSummary />', () => {
  it('shows the correct snapshot tree for the <EvaluationSummary> block', () => {
    const component = (
      <MemoryRouter>
        <EvaluationSummary
          score={100}
          term="Evaluation Summary Term"
          to="/to-evaluation-summary"
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
