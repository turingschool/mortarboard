// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'
import AppMaxWidth from './AppMaxWidth'
import Loader from './Loader'
import type { ApplicantType } from '../types/flowtypes'

const Title = glamorous.h1({
  marginBottom: 96,
  fontSize: 34,
  fontWeight: 100,
  color: '#808080',
})

const Status = glamorous.div({
  position: 'absolute',
  top: 0,
  right: 0,
})

const Dl = glamorous.dl({
  display: 'flex',
  color: '#999',
})

const Dt = glamorous.dt({
  minWidth: 240,
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
})

const Dd = glamorous.dd({
  marginLeft: 0,
  fontSize: 16,
  fontWeight: 200,
})

type DefinitionType = {
  children: React.Element<*>,
  term: string,
}
const Definition = ({ children, term }: DefinitionType) => (
  <Dl>
    <Dt>{term}</Dt>
    <Dd>{children}</Dd>
  </Dl>
)

type Props = {
  data: {
    Applicant: ApplicantType,
    loading: boolean,
  },
}

export default class extends React.PureComponent {
  props: Props

  render() {
    const { Applicant, loading } = this.props.data
    if (loading && !Applicant) {
      return (
        <Loader>Loading Applicant...</Loader>
      )
    }

    return (
      <AppMaxWidth maxWidth={960} position="relative">
        <Title>
          {Applicant.firstName} {Applicant.lastName}
        </Title>
        <Link to="#">Edit Student Info</Link>
        <Definition term="Email Address">
          <a href={`mailto:${Applicant.email}`}>{Applicant.email}</a>
        </Definition>
        <Definition term="Birthdate">
          {Applicant.birthdate}
        </Definition>
        <Definition term="GitHub">
          {Applicant.github}
        </Definition>
        <Definition term="Referred By">
          {Applicant.referredBy}
        </Definition>
        <Definition term="Application Age">
          <TimeAgo date={Applicant.createdAt} />
        </Definition>
        <Definition term="Resume">
          <a href={`${Applicant.resume}`}>View PDF</a>
        </Definition>
        {Applicant.applyAction &&
          <Definition term="Apply Action">
            {Applicant.applyAction}
          </Definition>
        }
        <Status>
          <div>Application Status</div>
          <div>{Applicant.applyStatus}</div>
        </Status>
      </AppMaxWidth>
    )
  }
}
