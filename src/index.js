// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
// TODO: Remove `/lib` once the apollo clients version bump
import { InMemoryCache } from 'apollo-cache-inmemory/lib'
import { HttpLink } from 'apollo-link-http'
import logger from 'apollo-link-logger'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { concat } from 'ramda'
import { BASE_URL, GRAPHQL_ENDPOINT } from './constants/networking'
import Layout from './components/templates/Layout'
import RouteSwitch from './components/templates/RouteSwitch'
import ApplicantDetail from './components/pages/ApplicantDetail'
import ApplicantValuesEvaluation from './components/pages/ApplicantValuesEvaluation'
import ApplicantLogicEvaluation from './components/pages/ApplicantLogicEvaluation'
import Applicants from './components/pages/Applicants'
import NotFound from './components/pages/NotFound'

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
})

const link = concat(logger, httpLink)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})


const rootElement = document && document.getElementById('root')

if (rootElement) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <RouteSwitch>
            <Route exact path={`${BASE_URL}/`} component={Applicants} />
            <Route exact path={`${BASE_URL}/applicants`} component={Applicants} />
            <Route path={`${BASE_URL}/applicant/:id/logic-evaluation`} component={ApplicantLogicEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id/values-evaluation`} component={ApplicantValuesEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id`} component={ApplicantDetail} />
            <Route component={NotFound} />
          </RouteSwitch>
        </Layout>
      </Router>
    </ApolloProvider>,
    rootElement,
  )
}
