// @flow
import React from 'react'
import glamorous from 'glamorous'
import ApplicantCard from '../containers/ApplicantCardContainer'
import Loader from '../components/blocks/Loader'
import AppContainment from './elements/AppContainment'
import type { ApplicantType, LocationType } from '../types/flowtypes'

type Props = {
  children: React.Element<*>,
  data: {
    allApplicants: Array<ApplicantType>,
    loading: boolean,
    refetch: Function,
  },
  location: LocationType,
}

export default class extends React.PureComponent {
  props: Props

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.data.refetch()
    }
  }

  render() {
    const { allApplicants, loading, refetch } = this.props.data
    if (loading && !allApplicants) {
      return (
        <Loader>
          Loading Applicants...
        </Loader>
      )
    }

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
        {this.props.children}
      </AppContainment>
    )
  }
}

// -------------------------------------

const Cards = glamorous.section({
  display: 'flex',
  marginLeft: -16,
  padding: 16,
  '& > *': {
    marginLeft: 16,
  },
})
