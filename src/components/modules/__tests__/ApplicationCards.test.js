import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicationCards from '../ApplicationCards'
import { stub } from '../../../types/Application'
import { stub as stubApplicant } from '../../../types/Applicant'
import { noop } from '../../../lib/utils'

const allApplications = [
  stub({ applicant: stubApplicant() }),
  stub({ id: '22', applicant: stubApplicant({ firstName: 'Robert', lastName: 'Sacamano', id: '2' }) }),
]

describe('<ApplicantCard />', () => {
  it('shows the correct snapshot tree for the <ApplicationCards> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicationCards
          allApplications={allApplications}
          location={{ key: '1' }}
          refetch={{ noop }}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
