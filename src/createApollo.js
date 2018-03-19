// @flow
import { tap, when } from 'ramda'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { AUTH_TOKEN, GRAPHQL_ENDPOINT } from './constants/networking'
import { isDev } from './lib/utils'

/* eslint-disable no-console */
const log = (...args) => tap(when(isDev, console.log(...args)))
const warn = (...args) => tap(when(isDev, console.warn(...args)))
/* eslint-enable no-console */

export default () => {
  const cache = new InMemoryCache()

  const logger = new ApolloLink((operation, forward) => {
    log(`outgoing: ${operation.operationName}`, operation)
    return forward(operation).map((result) => {
      log(`incoming: ${operation.operationName}`, result)
      return result
    })
  })

  const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
    if (networkError) {
      const { statusCode } = networkError
      // Auth token failed...
      if (statusCode === 403 || statusCode === 401) {
        warn(`Received ${statusCode}. Logging out.`)
        // logout()
      }
      // Some sort of network error...
      warn(`${statusCode} [Network Error]:`, networkError, { operation })
      return
    }

    if (graphQLErrors) {
      const errors = graphQLErrors.map(props => props.message)
      warn(`[${errors.length} GraphQL Errors]:`, errors, { graphQLErrors, operation, response })
      return
    }

    // fubar...
    warn('[ErrorLink] fall through:', { graphQLErrors, networkError, operation, response })
  })

  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      'x-turing-auth': `${AUTH_TOKEN}`,
    },
  })

  const link = ApolloLink.from([
    logger,
    errorLink,
    httpLink,
  ])

  return new ApolloClient({
    cache,
    link,
  })
}
