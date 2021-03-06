// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import type { Match } from 'react-router-dom'
import { map } from 'ramda'
import { isNotNil } from '../../lib/utils'
import { COLORS } from '../../constants/theme'
import DescriptionBase from '../blocks/Description'
import EvaluationSummary from '../blocks/EvaluationSummary'
import Loader from '../blocks/Loader'
import Status from '../blocks/Status'
import StatusModal, { type StatusModalProps } from '../blocks/StatusModal'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import SectionContainment from '../elements/SectionContainment'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { Application } from '../../types/Application'

type Props = {
  application: Application,
  evaluatorList?: string,
  handleOpenSendStatus?: () => void,
  handleOpenSubmitEvaluation?: () => {},
  handleStatusMutation: () => void,
  isStatusMutatable: boolean,
  match: Match,
  showScores?: boolean,
} & StatusModalProps

const ApplicantModule = ({
  application: {
    id,
    applicant,
    evaluations,
    isStatusMutatable,
    resume,
    // scoreLogicEvaluation,
    scoreOnlineLogicTest,
    // scoreValuesEvaluation,
    status,
    statusLabel,
  },
  evaluatorList,
  handleCloseModal,
  handleOpenSendStatus,
  handleOpenSubmitEvaluation,
  handleStatusMutation,
  handleStatusSelect,
  isModalOpen,
  isSendStatusDialog,
  isSubmitEvaluationDialog,
  match,
  showScores,
  statusValue,
}: Props) => (
  <div>
    { isNotNil(status) &&
      <StatusBar />
    }
    <SectionContainment>
      { isNotNil(status) &&
        <Header>
          <Heading>
            {`${applicant.firstName} ${applicant.lastName}`}
          </Heading>
          { isNotNil(statusLabel) &&
            <Status
              id={id}
              align="flex-end"
              onClick={isStatusMutatable ? handleStatusMutation : null}
            >
              {statusLabel}
            </Status>
          }
        </Header>
      }
      { isNotNil(applicant.email) &&
        <Description term="Email Address">
          <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
        </Description>
      }
      { isNotNil(applicant.birthDate) &&
      <Description term="Birth Date">
        {applicant.birthDate}
      </Description>
      }
      { isNotNil(applicant.login) &&
        <Description term="Login">
          { applicant.loginLink != null ?
            <TextLink href={applicant.loginLink}>{applicant.login}</TextLink> :
            <span>{applicant.login}</span>
          }
        </Description>
      }
      { isNotNil(applicant.referredBy) &&
        <Description term="Referred By">
          {applicant.referredBy}
        </Description>
      }
      { isNotNil(applicant.createdAt) &&
        <Description term="Application Age">
          <TimeAgo date={applicant.createdAt} />
        </Description>
      }
      { isNotNil(evaluatorList) &&
        <Description term="Evaluators">
          {evaluatorList}
        </Description>
      }
      { isNotNil(resume) &&
        <Description term="Resume">
          <TextLink href={`${String(resume)}`}>View PDF</TextLink>
        </Description>
      }
    </SectionContainment>
    { showScores === true &&
      <SectionContainment mt={72}>
        <EvaluationSummary
          score={scoreOnlineLogicTest}
          term="Online Logic Test"
        />
        { map(evaluation => (
          <EvaluationSummary
            key={evaluation.id}
            term={evaluation.title}
            to={`${match.url}/evaluation/${evaluation.id}`}
          />
        ), evaluations)}
      </SectionContainment>
    }
    {(isNotNil(handleOpenSendStatus) || isNotNil(handleOpenSubmitEvaluation)) &&
      <Actions>
        { isNotNil(handleOpenSendStatus) && isNotNil(isSendStatusDialog) &&
          <Button box centered primary mt={32} onClick={handleOpenSendStatus}>
            Send status email
          </Button>
        }
        { isNotNil(handleOpenSubmitEvaluation) && isNotNil(isSubmitEvaluationDialog) &&
          <Button box centered primary mt={32} onClick={handleOpenSubmitEvaluation}>
            Submit Evaluation
          </Button>
        }
      </Actions>
    }
    { isModalOpen != null && handleCloseModal != null &&
      <StatusModal
        handleCancel={handleCloseModal}
        handleChange={handleStatusSelect}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleCloseModal}
        handleStatusSelect={handleStatusSelect}
        isModalOpen={isModalOpen}
        isSendStatusDialog={isSendStatusDialog}
        isSubmitEvaluationDialog={isSubmitEvaluationDialog}
        statusValue={statusValue}
      />
    }
  </div>
)

export default ApplicantModule
export const ComponentLoader = () => (
  <Loader>Loading Applicant...</Loader>
)

// -------------------------------------

const Description = props => (
  <DescriptionBase color={COLORS.GREY_8} isRow {...props} />
)

const Header = glamorous.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 128,
})

const Actions = glamorous(SectionContainment)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})
