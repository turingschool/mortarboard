// @flow
import React from 'react'
import glamorous from 'glamorous'
import DescriptionBase from './blocks/Description'
import Status from './blocks/Status'
import StatusActionLabel from './blocks/StatusActionLabel'
import Heading from './elements/Heading'
import HitLink from './elements/HitLink'
import StatusBar from './elements/StatusBar'
import TextLink from './elements/TextLink'
import type { ApplicantType, HistoryType } from '../types/flowtypes'

type Props = {
  applicant: ApplicantType,
  history: HistoryType,
  mutate: Function,
}

export default class extends React.PureComponent {
  props: Props

  handleDelete = async () => {
    const { applicant, history, mutate } = this.props
    await mutate({ variables: { id: applicant.id } })
    history.replace('/')
  }

  render() {
    const { applicant } = this.props
    return (
      <Card>
        <StatusBar />
        <Header>
          <Heading marginTop="auto">
            <span>{applicant.firstName} </span>
            <span>{applicant.lastName}</span>
          </Heading>
          {applicant.applyAction &&
            <StatusActionLabel position="absolute" top={16} right={16}>
              {applicant.applyAction}
            </StatusActionLabel>
          }
        </Header>
        <Descriptions>
          <Description term="Email Address">
            <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
          </Description>
          <Description term="GitHub">
            <TextLink href={`https://github.com/${applicant.github}`}>
              {`github.com/${applicant.github}`}
            </TextLink>
          </Description>
          <Status marginTop={24}>
            {applicant.applyStatus}
          </Status>
        </Descriptions>
        <HitLink to={`/applicant/${applicant.id}`} />
      </Card>
    )
  }
}

// -------------------------------------

const Card = glamorous.div({
  position: 'relative',
  width: 320,
  height: 400,
  border: '1px solid rgba(0, 0, 0, 0.2)',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
})

const Header = glamorous.header({
  display: 'flex',
  flexDirection: 'column',
  height: 160,
  paddingRight: 24,
  paddingBottom: 16,
  paddingLeft: 24,
  backgroundColor: '#e5e5e5',
})

const Descriptions = glamorous.div({
  marginTop: 24,
  paddingRight: 24,
  paddingLeft: 24,
})

const Description = props => (
  <DescriptionBase color="#999" {...props} />
)
