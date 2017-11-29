// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import type { Location } from 'react-router-dom'
import ApplicantCard from './ApplicantCard'
import Loader from '../blocks/Loader'
import AppContainment from '../elements/AppContainment'
import type { Applicant } from '../../types/Applicant'

type Props = {
  children: Node,
  allApplicants: Array<Applicant>,
  refetch: Function,
  location: Location,
}

export default class extends React.PureComponent<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.refetch()
    }
  }

  render() {
    const { allApplicants, children, refetch } = this.props
    return (
      <AppContainment>
        <Cards>
          {allApplicants && allApplicants.map(applicant => (
            <ApplicantCard
              key={applicant.id}
              applicant={applicant}
              refresh={() => refetch()}
            />
          ))}
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
