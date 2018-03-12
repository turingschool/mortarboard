// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BASE_URL } from './constants/networking'
import Layout from './components/templates/Layout'
import RouteSwitch from './components/templates/RouteSwitch'
import ApplicationDetail from './components/pages/ApplicationDetail'
import ApplicationLogicEvaluation from './components/pages/ApplicationLogicEvaluation'
import ApplicationValuesEvaluation from './components/pages/ApplicationValuesEvaluation'
import Applications from './components/pages/Applications'
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
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
            <Route path={`${BASE_URL}/application/:id/logic-evaluation`} component={ApplicationLogicEvaluation} />
            <Route path={`${BASE_URL}/application/:id/values-evaluation`} component={ApplicationValuesEvaluation} />
            <Route path={`${BASE_URL}/application/:id`} component={ApplicationDetail} />
            <Route path={`${BASE_URL}/login`} component={Login} />
            <Route component={NotFound} />
          </RouteSwitch>
        </Layout>
      </Router>
    </ApolloProvider>,
    rootElement,
  )
}
