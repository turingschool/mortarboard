// @flow
import React from 'react'
import TimeAgo from 'react-timeago'
import glamorous from 'glamorous'
import Loader from './blocks/Loader'
import DescriptionBase from './blocks/Description'
import EvaluationSummary from './blocks/EvaluationSummary'
import Status from './blocks/Status'
import StatusActionLabel from './blocks/StatusActionLabel'
import AppContainment from './elements/AppContainment'
import Heading from './elements/Heading'
import SectionContainment from './elements/SectionContainment'
import StatusBar from './elements/StatusBar'
import EditLink from './elements/EditLink'
import TextLink from './elements/TextLink'
import type { ApplicantType, MatchType } from '../types/flowtypes'

type Props = {
  applicant: ApplicantType,
  match: MatchType,
}

export default ({ applicant, match }: Props) => (
  <AppContainment>
    <StatusBar marginBottom={32} />
    <SectionContainment>
      <Header>
        <Heading>
          {`${applicant.firstName} ${applicant.lastName}`}
        </Heading>
        <Status alignItems="flex-end" to="/">
          {applicant.applyStatus}
        </Status>
      </Header>
      <EditLink to="/">Edit Student Info</EditLink>
      <Description term="Email Address">
        <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
      </Description>
      <Description term="Birthdate">
        {applicant.birthdate}
      </Description>
      <Description term="GitHub">
        {applicant.github}
      </Description>
      <Description term="Referred By">
        {applicant.referredBy}
      </Description>
      <Description term="Application Age">
        <TimeAgo date={applicant.createdAt} />
      </Description>
      <Description term="Resume">
        <TextLink href={`${applicant.resume}`}>View PDF</TextLink>
      </Description>
    </SectionContainment>
    <SectionContainment marginTop={80}>
      <EvaluationSummary
        score={applicant.scoreOnlineLogicTest}
        term="Online Logic Test"
      />
      <EvaluationSummary
        score={applicant.scoreLogicEvaluation}
        term="Logic Evaluation"
        to={`${match.url}/logic-evaluation`}
      />
      <EvaluationSummary
        score={applicant.scoreValuesEvaluation}
        term="Values Evaluation"
        to={`${match.url}/values-evaluation`}
      />
    </SectionContainment>
    {applicant.applyAction &&
      <SectionContainment marginTop={80}>
        <StatusActionLabel>
          {applicant.applyAction}
        </StatusActionLabel>
      </SectionContainment>
    }
  </AppContainment>
)

export const ComponentLoader = () => (
  <Loader>Loading Applicant...</Loader>
)

// -------------------------------------

const Description = props => (
  <DescriptionBase color="#808080" isRow {...props} />
)

const Header = glamorous.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
