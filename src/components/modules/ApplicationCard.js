// @flow
import React from 'react'
import glamorous from 'glamorous'
import { compose } from 'ramda'
import { pure } from 'recompose'
import { COLORS } from '../../constants/theme'
import Description from '../blocks/Description'
import Status from '../blocks/Status'
import Heading from '../elements/Heading'
import HitLink from '../elements/HitLink'
import StatusBar from '../elements/StatusBar'
import StatusModal, { type StatusModalProps } from '../blocks/StatusModal'
import TextLink from '../elements/TextLink'
import type { Application } from '../../types/Application'
import withStatusMutationEvents from '../../containers/withStatusMutationEvents'

type Props = {
  application: Application,
  handleStatusMutation: () => void,
  isStatusMutatable: boolean,
} & StatusModalProps

const ApplicantCard = ({
  application: { id, applicant, isStatusMutatable, statusLabel },
  handleCloseModal,
  handleStatusSelect,
  isModalOpen,
  isSendStatusDialog,
  isSubmitEvaluationDialog,
  statusValue,
  handleStatusMutation,
}: Props) => (
  <Card>
    <StatusBar />
    <Header>
      <Heading mt="auto">
        <span>{applicant.firstName} </span>
        <span>{applicant.lastName}</span>
      </Heading>
    </Header>
    <Descriptions>
      <Description term="Email Address">
        <TextLink href={`mailto:${applicant.email}`}>{applicant.email}</TextLink>
      </Description>
      <Description term="Login">
        { applicant.loginLink != null ?
          <TextLink href={applicant.loginLink}>{applicant.login}</TextLink> :
          <span>{applicant.login}</span>
        }
      </Description>
      <Status
        id={id}
        mt={24}
        onClick={isStatusMutatable ? handleStatusMutation : null}
      >
        {statusLabel}
      </Status>
    </Descriptions>
    <HitLink to={`/application/${id}`} />
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
  </Card>
)

export default compose(
  withStatusMutationEvents,
  pure,
)(ApplicantCard)

// -------------------------------------

const Card = glamorous.div({
  position: 'relative',
  minWidth: 320,
  height: 408,
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
  backgroundColor: COLORS.GREY_E,
})

const Descriptions = glamorous.div({
  marginTop: 24,
  paddingRight: 24,
  paddingLeft: 24,
  color: COLORS.GREY_4,
})
