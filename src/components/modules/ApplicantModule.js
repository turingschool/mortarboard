// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import type { Match } from 'react-router-dom'
import { isNotNil } from '../../lib/utils'
import { COLORS } from '../../constants/theme'
import ConfirmDialog from '../modules/ConfirmDialog'
import SendRecommendationDialog from '../modules/SendRecommendationDialog'
import SendStatusDialog from '../modules/SendStatusDialog'
import DescriptionBase from '../blocks/Description'
import EvaluationSummary from '../blocks/EvaluationSummary'
import Loader from '../blocks/Loader'
import Modal from '../blocks/Modal'
import StatusActionLabel from '../blocks/StatusActionLabel'
import Status from '../blocks/Status'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import SectionContainment from '../elements/SectionContainment'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { Applicant } from '../../types/Applicant'

type Props = {
  applicant: Applicant,
  evaluatorList?: string,
  handleCloseModal?: () => {},
  handleOpenConfirm?: () => {},
  handleOpenSendRecommendation?: () => {},
  handleOpenSendStatus?: () => {},
  handleRecommendationSelect: () => {},
  handleStatusSelect: () => {},
  isConfirmDialog?: boolean,
  isModalOpen?: boolean,
  isSendRecommendationDialog?: boolean,
  isSendStatusDialog?: boolean,
  match: Match,
  recommendationValue: string,
  statusValue: string,
}

const ApplicantModule = ({
  applicant,
  evaluatorList,
  handleCloseModal,
  handleOpenConfirm,
  handleOpenSendRecommendation,
  handleOpenSendStatus,
  handleRecommendationSelect,
  handleStatusSelect,
  isConfirmDialog,
  isModalOpen,
  isSendRecommendationDialog,
  isSendStatusDialog,
  match,
  recommendationValue,
  statusValue,
}: Props) => (
  <div>
    { isNotNil(applicant.status) &&
      <StatusBar />
    }
    <SectionContainment>
      <Header>
        <Heading>
          {`${applicant.firstName} ${applicant.lastName}`}
        </Heading>
        { isNotNil(applicant.status) &&
          <Status align="flex-end" onClick={handleOpenSendStatus}>
            {applicant.status}
          </Status>
        }
      </Header>
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
      { isNotNil(applicant.github) &&
        <Description term="GitHub">
          {applicant.github}
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
      { isNotNil(applicant.resume) &&
        <Description term="Resume">
          <TextLink href={`${String(applicant.resume)}`}>View PDF</TextLink>
        </Description>
      }
    </SectionContainment>
    { /* bit of kludge */ }
    {((applicant.applications && applicant.applications[0])) &&
      <SectionContainment mt={72}>
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
      </SectionContainment>
    }
    {applicant.action &&
      <SectionContainment mt={72}>
        <StatusActionLabel status={applicant.action} />
        <StatusActionMessage>{applicant.action.message}</StatusActionMessage>
      </SectionContainment>
    }
    {(handleOpenConfirm != null ||
      handleOpenSendRecommendation != null ||
      handleOpenSendStatus != null) &&
      applicant.action &&
      <Actions>
        { isNotNil(handleOpenConfirm) &&
          <Button box centered primary mt={32} onClick={handleOpenConfirm}>
            Submit Evaluation
          </Button>
        }
        { isNotNil(handleOpenSendRecommendation) &&
          <Button box centered primary mt={32} onClick={handleOpenSendRecommendation}>
            Send recommendation
          </Button>
        }
        { isNotNil(handleOpenSendStatus) &&
          <Button box centered primary mt={32} onClick={handleOpenSendStatus}>
            Send status email
          </Button>
        }
      </Actions>
    }
    { isModalOpen != null && handleCloseModal != null &&
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      >
        { isConfirmDialog === true &&
          <ConfirmDialog
            handleCancel={handleCloseModal}
            handleConfirm={handleCloseModal}
          />
        }
        { isSendRecommendationDialog === true &&
          <SendRecommendationDialog
            handleCancel={handleCloseModal}
            handleChange={handleRecommendationSelect}
            handleConfirm={handleCloseModal}
            recommendationValue={recommendationValue}
          />
        }
        { isSendStatusDialog === true &&
          <SendStatusDialog
            handleCancel={handleCloseModal}
            handleChange={handleStatusSelect}
            handleConfirm={handleCloseModal}
            statusValue={statusValue}
          />
        }
      </Modal>
    }
  </div>
)

ApplicantModule.defaultProps = {
  evaluatorList: null,
  handleCloseModal: null,
  handleOpenConfirm: null,
  handleOpenSendRecommendation: null,
  handleOpenSendStatus: null,
  isConfirmDialog: false,
  isModalOpen: null,
  isSendRecommendationDialog: false,
  isSendStatusDialog: false,
}

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

const StatusActionMessage = glamorous.div({
  fontSize: 14,
  color: COLORS.GREY_8,
  marginTop: 8,
})

const Actions = glamorous(SectionContainment)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})
