import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicantCard from '../ApplicantCard'
import { stub } from '../../../types/Applicant'

describe('<ApplicantCard />', () => {
  it('shows the correct snapshot tree for the <ApplicantCard> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicantCard applicant={stub()} />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
