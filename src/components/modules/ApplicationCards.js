// @flow
import React, { type Node } from 'react'
import type { Location } from 'react-router-dom'
import glamorous from 'glamorous'
import { map } from 'ramda'
import ApplicationCard from './ApplicationCard'
import Loader from '../blocks/Loader'
import AppContainment from '../elements/AppContainment'
import type { Application } from '../../types/Application'

type Props = {
  children: Node,
  allApplications: Array<Application>,
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
    const { allApplications, children } = this.props
    return (
      <AppContainment>
        <Cards>
          {map(application => (
            <ApplicationCard
              applicant={application.applicant}
              id={application.id}
              key={application.id}
            />
          ), allApplications)}
        </Cards>
        {children}
      </AppContainment>
    )
  }
}

export const ComponentLoader = () => (
  <Loader>Loading Applications...</Loader>
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
