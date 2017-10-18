// @flow
import React from 'react'
import glamorous from 'glamorous'
import { BASE_URL } from '../constants/networking'
import ImageLink from './elements/Link'
import TextLink from './elements/TextLink'
import { ChevronIconThin } from './elements/Icons'

type Props = {
  goBack: Function,
}

export default (props: Props) => (
  <View>
    <Nav>
      <Pulled>
        { props.goBack &&
          <BackButton onClick={props.goBack} role="button">
            <ChevronIconThin />
          </BackButton>
        }
      </Pulled>
      <div>
        <Pushed>
          <User>
            <span><span role="img" aria-label="hi">👋</span> Jeff Casimir</span>
            <span> / </span>
            <TextLink to="/">Logout</TextLink>
            <span> / </span>
            <TextLink to="/applicant/create">Create Applicant</TextLink>
          </User>
          <ImageLink to="/">
            <img
              alt="turing school mark"
              src={`${BASE_URL}/turing-school-mark-256.png`}
              width={48}
              height={48}
            />
          </ImageLink>
        </Pushed>
      </div>
    </Nav>
  </View>
)

// -------------------------------------

const View = glamorous.div({
  height: 112,
  backgroundColor: '#fff',
})

const Nav = glamorous.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1392,
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 16,
  paddingLeft: 16,
})

const Pulled = glamorous.div({
  display: 'flex',
  alignItems: 'center',
})

const Pushed = glamorous.div({
  display: 'flex',
  alignItems: 'center',
})

const User = glamorous.span({
  fontSize: 14,
  color: '#808080',
  marginRight: 40,
})

const BackButton = glamorous.button({
  color: '#999',
})
