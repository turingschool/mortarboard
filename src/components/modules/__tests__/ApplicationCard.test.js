import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import ApplicationCard from '../ApplicationCard'
import { stub } from '../../../types/Applicant'

describe('<ApplicationCard />', () => {
  it('shows the correct snapshot tree for the <ApplicantCard> module', () => {
    const component = (
      <MemoryRouter>
        <ApplicationCard applicant={stub()} />
      </MemoryRouter>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
