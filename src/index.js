// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BASE_URL, GRAPHQL_ENDPOINT } from './constants/networking'
import RouteSwitch from './pages/RouteSwitch'
import Layout from './pages/Layout'
import ApplicantCreate from './pages/ApplicantCreate'
import ApplicantDetail from './pages/ApplicantDetail'
import ApplicantValuesEvaluation from './pages/ApplicantValuesEvaluation'
import ApplicantLogicEvaluation from './pages/ApplicantLogicEvaluation'
import Applicants from './pages/Applicants'
import NotFound from './pages/NotFound'
import PostCreate from './pages/PostCreate'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_ENDPOINT,
})

const client = new ApolloClient({ networkInterface })
const rootElement = document && document.getElementById('root')

if (rootElement) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <RouteSwitch>
            <Route exact path={`${BASE_URL}/`} component={Applicants} />
            <Route exact path={`${BASE_URL}/applicants`} component={Applicants} />
            <Route path={`${BASE_URL}/applicant/create`} component={ApplicantCreate} />
            <Route path={`${BASE_URL}/applicant/:id/logic-evaluation`} component={ApplicantLogicEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id/values-evaluation`} component={ApplicantValuesEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id`} component={ApplicantDetail} />
            <Route exact path={`${BASE_URL}/posts`} component={Posts} />
            <Route path={`${BASE_URL}/post/create`} component={PostCreate} />
            <Route path={`${BASE_URL}/post/:id`} component={PostDetail} />
            <Route component={NotFound} />
          </RouteSwitch>
        </Layout>
      </Router>
    </ApolloProvider>,
    rootElement,
  )
}
