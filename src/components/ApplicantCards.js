// @flow
import React from 'react'
import glamorous from 'glamorous'
import ApplicantCard from '../containers/ApplicantCard'
import AppMaxWidth from '../components/AppMaxWidth'
import Loader from '../components/Loader'
import type { ApplicantType, LocationType } from '../types/flowtypes'

const Cards = glamorous.section({
  display: 'flex',
  padding: 16,
  marginLeft: -16,
  '& > *': {
    marginLeft: 16,
  },
})

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
      <AppMaxWidth>
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
      </AppMaxWidth>
    )
  }
}
