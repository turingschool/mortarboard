// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import type { Match } from 'react-router-dom'
import Loader from '../blocks/Loader'
import DescriptionBase from '../blocks/Description'
import EvaluationSummary from '../blocks/EvaluationSummary'
import StatusBase from '../blocks/Status'
import StatusActionLabel from '../blocks/StatusActionLabel'
import Heading from '../elements/Heading'
import SectionContainment from '../elements/SectionContainment'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { Applicant } from '../../types/Applicant'

type Props = {
  applicant: Applicant,
  match: Match,
}

export default ({
  applicant,
  match,
}: Props) => (
  <div>
    { applicant.status != null &&
      <StatusBar />
    }
    <SectionContainment>
      <Header>
        <Heading>
          {`${applicant.firstName} ${applicant.lastName}`}
        </Heading>
        { applicant.status != null &&
          <Status to="/">
            {applicant.status}
          </Status>
        }
      </Header>
      { applicant.email &&
        <Description term="Email Address">
          <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
        </Description>
      }
      { applicant.birthdate != null &&
      <Description term="Birthdate">
        {applicant.birthdate}
      </Description>
      }
      { applicant.github &&
        <Description term="GitHub">
          {applicant.github}
        </Description>
      }
      { applicant.referredBy != null &&
        <Description term="Referred By">
          {applicant.referredBy}
        </Description>
      }
      { applicant.createdAt &&
        <Description term="Application Age">
          <TimeAgo date={applicant.createdAt} />
        </Description>
      }
      { applicant.resume != null &&
        <Description term="Resume">
          <TextLink href={`${applicant.resume}`}>View PDF</TextLink>
        </Description>
      }
    </SectionContainment>
    { /* bit of kludge */ }
    {((applicant.applications && applicant.applications[0])) &&
      <ScoreContainment>
        <EvaluationSummary
          score={applicant.applications[0].scoreOnlineLogicTest}
          term="Online Logic Test"
        />
        <EvaluationSummary
          score={applicant.applications[0].scoreLogicEvaluation}
          term="Logic Evaluation"
          to={`${match.url}/logic-evaluation`}
        />
        <EvaluationSummary
          score={applicant.applications[0].scoreValuesEvaluation}
          term="Values Evaluation"
          to={`${match.url}/values-evaluation`}
        />
      </ScoreContainment>
    }
    {applicant.action &&
      <ScoreContainment>
        <StatusActionLabel status={applicant.action} />
        <p>{applicant.action.message}</p>
      </ScoreContainment>
    }
  </div>
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
  minHeight: 128,
})

const Status = glamorous(StatusBase)({
  alignItems: 'flex-end',
})

const ScoreContainment = glamorous(SectionContainment)({
  marginTop: 72,
})
