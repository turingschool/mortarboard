// @flow
import React from 'react'
import { Div } from 'glamorous'
import SearchBar from '../containers/SearchBarContainer'
import ApplicantCards from '../containers/ApplicantCardsContainer'

export default() => (
  <Div width="100%">
    <SearchBar />
    <ApplicantCards />
  </Div>
)
