// @flow
import React, { type Node } from 'react'
import Gridzzly from 'gridzzly'
import glamorous from 'glamorous'
import NavBar from '../../containers/NavBarContainer'
import { isDev } from '../../lib/utils'

type Props = {
  children: Node,
}

export default (props: Props) => (
  <View>
    <NavBar />
    <Main role="main">
      {props.children}
    </Main>
    { isDev() &&
      <Gridzzly
        autoHide
        persist
        cycleKey="~"
        position="fixed"
        size={32}
        toggleKey="`"
        zIndex={666}
      />
    }
  </View>
)

// -------------------------------------
const View = glamorous.div({
  position: 'relative',
})

const Main = glamorous.main({
  position: 'relative',
})
