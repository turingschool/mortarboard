// @flow
import React, { type Node } from 'react'
import type { Location } from 'react-router-dom'
import glamorous from 'glamorous'
import { map } from 'ramda'
import ApplicantCard from './ApplicantCard'
import Loader from '../blocks/Loader'
import AppContainment from '../elements/AppContainment'
import type { Applicant } from '../../types/Applicant'

type Props = {
  children: Node,
  allApplicants: Array<Applicant>,
  refetch: () => {},
  location: Location,
}

export default class extends React.PureComponent<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.refetch()
    }
  }

  render() {
    const { allApplicants, children } = this.props
    return (
      <AppContainment>
        <Cards>
          {map(applicant => (
            <ApplicantCard applicant={applicant} key={applicant.id} />
          ), allApplicants)}
        </Cards>
        {children}
      </AppContainment>
    )
  }
}

export const ComponentLoader = () => (
  <Loader>Loading Applicants...</Loader>
)

// -------------------------------------

const Cards = glamorous.section({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: 16,
  '> *': {
    minWidth: '100%',
  },
  '@media (min-width: 41em)': {
    gridTemplateColumns: '1fr 1fr',
    '> *': {
      minWidth: 320,
    },
  },
  '@media (min-width: 62em)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@media (min-width: 83em)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
})
