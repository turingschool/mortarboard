import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicantModule from '../ApplicantModule'
import { noop } from '../../../lib/utils'
import { stub } from '../../../types/Applicant'
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
          applicant={stub()}
          match={match}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot tree for the <ApplicantModule> module with data', () => {
    const applicant = stub({
      action: stubAction(),
      applications: [stubApplication()],
    })

    const component = (
      <MemoryRouter>
        <ApplicantModule
          applicant={applicant}
          evaluatorList="Evaluator 1, Evaluator 2"
          match={match}
          handleCloseModal={noop}
          handleOpenConfirm={noop}
          handleOpenSendRecommendation={noop}
          handleOpenSendStatus={noop}
          handleRecommendationSelect={noop}
          handleStatusSelect={noop}
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
