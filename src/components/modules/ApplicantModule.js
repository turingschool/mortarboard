// @flow
import React from 'react'
import glamorous from 'glamorous'
import TimeAgo from 'react-timeago'
import type { Match } from 'react-router-dom'
import { COLORS } from '../../constants/theme'
import ConfirmDialog from '../modules/ConfirmDialog'
import SendRecommendationDialog from '../modules/SendRecommendationDialog'
import SendStatusDialog from '../modules/SendStatusDialog'
import DescriptionBase from '../blocks/Description'
import EvaluationSummary from '../blocks/EvaluationSummary'
import Loader from '../blocks/Loader'
import Modal from '../blocks/Modal'
import StatusActionLabel from '../blocks/StatusActionLabel'
import StatusBase from '../blocks/Status'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import SectionContainment from '../elements/SectionContainment'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { Applicant } from '../../types/Applicant'

type Props = {
  applicant: Applicant,
  handleCloseModal?: Function,
  handleOpenConfirm?: Function,
  handleOpenSendRecommendation?: Function,
  handleOpenSendStatus?: Function,
  handleRecommendationSelect: Function,
  handleStatusSelect: Function,
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
        <StatusActionMessage>{applicant.action.message}</StatusActionMessage>
      </ScoreContainment>
    }
    {(handleOpenConfirm != null ||
      handleOpenSendRecommendation != null ||
      handleOpenSendStatus != null) &&
      applicant.action &&
      <Actions>
        { handleOpenConfirm != null &&
          <Button box primary mt={32} onClick={handleOpenConfirm}>
            Submit Evaluation
          </Button>
        }
        { handleOpenSendRecommendation != null &&
          <Button box primary mt={32} onClick={handleOpenSendRecommendation}>
            Send recommendation
          </Button>
        }
        { handleOpenSendStatus != null &&
          <Button box primary mt={32} onClick={handleOpenSendStatus}>
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

// TODO: Move into StatusActionLabel
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
