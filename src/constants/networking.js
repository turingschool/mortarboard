// @flow
import { defaultTo } from 'ramda'

export const AUTH_TOKEN = defaultTo('', process.env.REACT_APP_X_TURING_AUTH)
export const BASE_URL = defaultTo('', process.env.PUBLIC_URL)
export const GRAPHQL_ENDPOINT = defaultTo('', process.env.REACT_APP_GRAPHQL_ENDPOINT)
