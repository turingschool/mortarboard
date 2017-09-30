// @flow
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RouteSwitch from './pages/RouteSwitch'
import Layout from './pages/Layout'
import ApplicantDetail from './pages/ApplicantDetail'
import Applicants from './pages/Applicants'
import NotFound from './pages/NotFound'
import PostCreate from './pages/PostCreate'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'

const networkInterface = createNetworkInterface({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT || ''}`,
})

const client = new ApolloClient({ networkInterface })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Layout>
        <RouteSwitch>
          <Route exact path="/" component={Applicants} />
          <Route exact path="/applicants" component={Applicants} />
          <Route path="/applicant/:id" component={ApplicantDetail} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/post/create" component={PostCreate} />
          <Route path="/post/:id" component={PostDetail} />
          <Route component={NotFound} />
        </RouteSwitch>
      </Layout>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
