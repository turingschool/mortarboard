// @flow
import React from 'react'
import glamorous from 'glamorous'
import { pure } from 'recompose'
import { COLORS } from '../../constants/theme'
import Description from '../blocks/Description'
import Status from '../blocks/Status'
import StatusActionLabel from '../blocks/StatusActionLabel'
import Heading from '../elements/Heading'
import HitLink from '../elements/HitLink'
import StatusBar from '../elements/StatusBar'
import TextLink from '../elements/TextLink'
import type { Applicant } from '../../types/Applicant'

type Props = {
  id: ID,
  applicant: Applicant,
  status: string,
}

export default pure(({ applicant, id, status }: Props) => (
  <Card>
    <StatusBar />
    <Header>
      <Heading mt="auto">
        <span>{applicant.firstName} </span>
        <span>{applicant.lastName}</span>
      </Heading>
      {applicant.action &&
        <StatusActionLabel inCard status={applicant.action} />
      }
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
      <Status mt={24}>
        {status}
      </Status>
    </Descriptions>
    <HitLink to={`/application/${id}`} />
  </Card>
))

// -------------------------------------

const Card = glamorous.div({
  position: 'relative',
  minWidth: 320,
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

const Descriptions = glamorous.div({
  marginTop: 24,
  paddingRight: 24,
  paddingLeft: 24,
  color: COLORS.GREY_4,
})
