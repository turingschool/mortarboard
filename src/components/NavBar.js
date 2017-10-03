// @flow
import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import { ChevronIconThin } from './elements/Icons'
import type { HistoryType, LocationType } from '../types/flowtypes'

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
            <img alt="turing school mark" src="/turing-school-mark-256.png" width={48} height={48} />
          </Link>
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
