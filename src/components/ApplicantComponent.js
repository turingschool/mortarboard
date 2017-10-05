// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import Loader from './blocks/Loader'
import DescriptionBase from './blocks/Description'
import EvaluationSummary from './blocks/EvaluationSummary'
import Status from './blocks/Status'
import StatusActionLabel from './blocks/StatusActionLabel'
import Heading from './elements/Heading'
import SectionContainment from './elements/SectionContainment'
import StatusBar from './elements/StatusBar'
import EditLink from './elements/EditLink'
import TextLink from './elements/TextLink'
import type { ApplicantType, MatchType } from '../types/flowtypes'

type Props = {
  applicant: ApplicantType,
  handleDelete: Function,
  isApplicantEditable: boolean,
  isEvaluatable: boolean,
  match: MatchType,
}

export default ({
  applicant,
  handleDelete,
  isApplicantEditable,
  isEvaluatable,
  match,
}: Props) => (
  <div>
    { applicant.applyStatus &&
      <StatusBar />
    }
    <SectionContainment marginTop={32}>
      <Header>
        <Heading>
          {`${applicant.firstName} ${applicant.lastName}`}
        </Heading>
        { applicant.applyStatus &&
          <Status alignItems="flex-end" to="/">
            {applicant.applyStatus}
          </Status>
        }
      </Header>
      { isApplicantEditable &&
        <EditLink to="/">Edit Applicant Info</EditLink>
      }
      { handleDelete &&
        <glamorous.Div textAlign="right" color="#ff4136">
          <button onClick={handleDelete}>Delete Applicant</button>
        </glamorous.Div>
      }
      { applicant.email &&
        <Description term="Email Address">
          <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
        </Description>
      }
      { applicant.birthdate &&
      <Description term="Birthdate">
        {applicant.birthdate}
      </Description>
      }
      { applicant.github &&
        <Description term="GitHub">
          {applicant.github}
        </Description>
      }
      { applicant.referredBy &&
        <Description term="Referred By">
          {applicant.referredBy}
        </Description>
      }
      { applicant.createdAt &&
        <Description term="Application Age">
          <TimeAgo date={applicant.createdAt} />
        </Description>
      }
      { applicant.resume &&
        <Description term="Resume">
          <TextLink href={`${applicant.resume}`}>View PDF</TextLink>
        </Description>
      }
    </SectionContainment>
    {(isEvaluatable ||
      applicant.scoreOnlineLogicTest ||
      applicant.scoreLogicEvaluation ||
      applicant.scoreValuesEvaluation) &&
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
    }
    {applicant.applyAction &&
      <SectionContainment marginTop={80}>
        <StatusActionLabel>
          {applicant.applyAction}
        </StatusActionLabel>
      </SectionContainment>
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
