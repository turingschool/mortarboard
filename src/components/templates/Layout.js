// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import NavBar from '../../containers/NavBarContainer'
import DevTool from '../modules/DevTool'

type Props = {
  children: Node,
}

export default (props: Props) => (
  <div>
    <NavBar />
    <Main role="main">
      {props.children}
    </Main>
    <DevTool />
  </div>
)

// -------------------------------------

const Main = glamorous.main({
  position: 'relative',
})
