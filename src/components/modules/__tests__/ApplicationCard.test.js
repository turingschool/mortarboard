import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicationCard from '../ApplicationCard'
import { stub } from '../../../types/Application'
import { stub as stubApplicant } from '../../../types/Applicant'

const application = stub({
  applicant: stubApplicant(),
})

describe('<ApplicationCard />', () => {
  it('shows the correct snapshot tree for the <ApplicantCard> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicationCard application={application} />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
