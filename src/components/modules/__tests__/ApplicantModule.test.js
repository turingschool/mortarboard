import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicantModule from '../ApplicantModule'
import { noop } from '../../../lib/utils'
import { stub as stubApplicant } from '../../../types/Applicant'
import { stub as stubApplication } from '../../../types/Application'
import { stub as stubEvaluation } from '../../../types/Evaluation'

const match = {
  url: '/match/url',
}

const evaluations = [
  stubEvaluation(),
  stubEvaluation({ id: '2' }),
]

describe('<ApplicantModule />', () => {
  it('shows the correct snapshot tree for the <ApplicantModule> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicantModule
          showScores
          application={stubApplication({
            applicant: stubApplicant(),
            evaluations,
          })}
          match={match}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <ApplicantModule> module with data', () => {
    const application = stubApplication({
      applicant: stubApplicant(),
    })

    const component = (
      <MemoryRouter>
        <ApplicantModule
          showScores
          application={application}
          evaluatorList="Evaluator 1, Evaluator 2"
          match={match}
          handleCloseModal={noop}
          handleOpenSendStatus={noop}
          handleOpenSubmitEvaluation={noop}
          handleStatusSelect={noop}
          isSubmitEvaluationDialog
          statusValue="status value"
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
