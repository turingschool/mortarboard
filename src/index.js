// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BASE_URL } from './constants/networking'
import Layout from './components/templates/Layout'
import RouteSwitch from './components/templates/RouteSwitch'
import ApplicantDetail from './components/pages/ApplicantDetail'
import ApplicantValuesEvaluation from './components/pages/ApplicantValuesEvaluation'
import ApplicantLogicEvaluation from './components/pages/ApplicantLogicEvaluation'
import Applications from './components/pages/Applications'
import NotFound from './components/pages/NotFound'
import Login from './components/pages/Login'
import createApollo from './createApollo'

const client = createApollo()
const rootElement = document && document.getElementById('root')

if (rootElement) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <RouteSwitch>
            <Route exact path={`${BASE_URL}/`} component={Applications} />
            <Route exact path={`${BASE_URL}/applications`} component={Applications} />
            <Route path={`${BASE_URL}/applicant/:id/logic-evaluation`} component={ApplicantLogicEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id/values-evaluation`} component={ApplicantValuesEvaluation} />
            <Route path={`${BASE_URL}/applicant/:id`} component={ApplicantDetail} />
            <Route path={`${BASE_URL}/login`} component={Login} />
            <Route component={NotFound} />
          </RouteSwitch>
        </Layout>
      </Router>
    </ApolloProvider>,
    rootElement,
  )
}
