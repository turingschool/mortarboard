import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicantModule from '../ApplicantModule'
import { noop } from '../../../lib/utils'
import { stub as stubApplicant } from '../../../types/Applicant'
import { stub as stubAction } from '../../../types/Action'
import { stub as stubApplication } from '../../../types/Application'

const match = {
  url: '/match/url',
}

describe('<ApplicantModule />', () => {
  it('shows the correct snapshot tree for the <ApplicantModule> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicantModule
          application={stubApplication({
            applicant: stubApplicant(),
          })}
          hasScores
          match={match}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <ApplicantModule> module with data', () => {
    const application = stubApplication({
      action: stubAction(),
      applicant: stubApplicant(),
    })

    const component = (
      <MemoryRouter>
        <ApplicantModule
          application={application}
          evaluatorList="Evaluator 1, Evaluator 2"
          match={match}
          handleCloseModal={noop}
          handleOpenConfirm={noop}
          handleOpenSendRecommendation={noop}
          handleOpenSendStatus={noop}
          handleRecommendationSelect={noop}
          handleStatusSelect={noop}
          hasScores
          isConfirmDialog
          recommendationValue="Recommendation Value"
          statusValue="status value"
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
