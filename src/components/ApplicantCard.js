// @flow
import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import type { ApplicantType, HistoryType } from '../types/flowtypes'

const Card = glamorous.div({
  width: 320,
  height: 400,
  border: '1px solid rgba(0, 0, 0, 0.2)',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
})

const Header = glamorous.header({
  display: 'flex',
  flexDirection: 'column',
  height: 160,
  paddingLeft: 24,
  paddingRight: 24,
  backgroundColor: '#e5e5e5',
})

const Heading = glamorous.h2({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  fontSize: 26,
  fontWeight: 100,
  color: '#808080',
})

const Dl = glamorous.dl({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 24,
  paddingRight: 24,
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
  applicant: ApplicantType,
  history: HistoryType,
  mutate: Function,
}

export default class extends React.PureComponent {
  props: Props

  // not currently used.
  handleDelete = async () => {
    const { applicant, history, mutate } = this.props
    await mutate({ variables: { id: applicant.id } })
    history.replace('/')
  }

  render() {
    const { applicant } = this.props
    return (
      <Card>
        <Header>
          <Heading>
            <span>{applicant.firstName} </span>
            <span>{applicant.lastName}</span>
          </Heading>
        </Header>
        <Definition term="Email Address">
          <a href={`mailto:${applicant.email}`}>{applicant.email}</a>
        </Definition>
        <Definition term="GitHub">
          {applicant.github}
        </Definition>
        <Definition term="Application Status">
          {applicant.applyStatus}
        </Definition>
        {applicant.applyAction &&
          <Definition term="Apply Action">
            {applicant.applyAction}
          </Definition>
        }
        <Link to={`/applicant/${applicant.id}`}>View</Link>
      </Card>
    )
  }
  // <span onClick={this.handleDelete}>Delete</span>
}
