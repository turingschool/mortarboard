// @flow
import React from 'react'
import glamorous from 'glamorous'
import { pure } from 'recompose'
import { COLORS } from '../../constants/theme'
import DescriptionBase from '../blocks/Description'
import StatusBase from '../blocks/Status'
import StatusActionLabelBase from '../blocks/StatusActionLabel'
import HeadingBase from '../elements/Heading'
import HitLink from '../elements/HitLink'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { ApplicantType } from '../../types/flowtypes'

type Props = {
  applicant: ApplicantType,
}

export default pure(({ applicant }: Props) => (
  <Card>
    <StatusBar />
    <Header>
      <Heading>
        <span>{applicant.firstName} </span>
        <span>{applicant.lastName}</span>
      </Heading>
      {applicant.applyAction &&
        <StatusActionLabel>
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
      <Status>
        {applicant.applyStatus}
      </Status>
    </Descriptions>
    <HitLink to={`/applicant/${applicant.id}`} />
  </Card>
))

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
  backgroundColor: COLORS.GREY_E,
})

const Heading = glamorous(HeadingBase)({
  marginTop: 'auto',
})

const StatusActionLabel = glamorous(StatusActionLabelBase)({
  position: 'absolute',
  top: 16,
  right: 16,
})

const Descriptions = glamorous.div({
  marginTop: 24,
  paddingRight: 24,
  paddingLeft: 24,
})

const Description = glamorous(DescriptionBase)({
  color: COLORS.GREY_9,
})

const Status = glamorous(StatusBase)({
  marginTop: 24,
})
