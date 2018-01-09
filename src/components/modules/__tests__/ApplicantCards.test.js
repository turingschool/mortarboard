import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicantCards from '../ApplicantCards'
import { stub } from '../../../types/Applicant'
import { noop } from '../../../lib/utils'

const allApplicants = [
  stub(),
  stub({ firstName: 'Robert', lastName: 'Sacamano' }),
]

describe('<ApplicantCard />', () => {
  it('shows the correct snapshot tree for the <ApplicantCards> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicantCards
          allApplicants={allApplicants}
          location={{ key: '1' }}
          refetch={{ noop }}
        />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
