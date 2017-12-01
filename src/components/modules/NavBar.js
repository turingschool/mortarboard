// @flow
import React from 'react'
import glamorous from 'glamorous'
import { always } from 'ramda'
import { BASE_URL } from '../../constants/networking'
import { COLORS } from '../../constants/theme'
import ImageLink from '../elements/Link'
import TextLink from '../elements/TextLink'
import { ChevronIconThin } from '../elements/Icons'

type Props = {
  goBack: Function,
}

const markSrc = always(`${BASE_URL}/turing-school-mark-256.png`)

export default (props: Props) => (
  <Nav>
    <View>
      <Column>
        { props.goBack &&
          <BackButton onClick={props.goBack} role="button">
            <ChevronIconThin />
          </BackButton>
        }
      </Column>
      <Column>
        <User>
          <span><span role="img" aria-label="hi">👋</span> Jeff Casimir</span>
          <span> / </span>
          <TextLink to="/">Logout</TextLink>
        </User>
        <ImageLink to="/">
          <img
            alt="turing school mark"
            src={markSrc()}
            width={48}
            height={48}
          />
        </ImageLink>
      </Column>
    </View>
  </Nav>
)

// -------------------------------------

const Nav = glamorous.nav({
  height: 112,
  backgroundColor: COLORS.WHITE,
})

const View = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1392,
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 8,
  paddingLeft: 8,
})

const Column = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

const User = glamorous.span({
  fontSize: 14,
  color: COLORS.GREY_8,
  marginRight: 40,
})

const BackButton = glamorous.button({
  color: COLORS.GREY_9,
})
