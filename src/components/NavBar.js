// @flow
import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import { ChevronIconThin } from './Icons'
import type { HistoryType, LocationType } from '../types/flowtypes'

const View = glamorous.div({
  height: 144,
  backgroundColor: '#fff',
})

const Nav = glamorous.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1360,
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
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

type Props = {
  history: HistoryType,
  location: LocationType,
}

export default (props: Props) => (
  <View>
    <Nav>
      <Pulled>
        { props.location.pathname !== '/' &&
          <BackButton onClick={props.history.goBack} role="button">
            <ChevronIconThin />
          </BackButton>
        }
      </Pulled>
      <div>
        <Pushed>
          <User>Jeff Casimir / Logout</User>
          <Link to="/">
            <img alt="turing school mark" src="/turing-school-mark-256.png" width={64} height={64} />
          </Link>
        </Pushed>
      </div>
    </Nav>
  </View>
)
