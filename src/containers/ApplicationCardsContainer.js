// @flow
import { camelizeKeys } from 'humps'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { assoc, compose, defaultTo, map, omit } from 'ramda'
import { branch, mapProps, renderComponent } from 'recompose'
import { nool } from '../lib/utils'
import allApplicationsQuery from '../graphql/allApplications'
import ApplicationCards, { ComponentLoader } from '../components/modules/ApplicationCards'
import { deriveFirstName, deriveLastName, deriveLoginLink } from '../types/Applicant'
import { deriveStatusLabel } from '../types/Application'

const normalizedApplicant = applicant => compose(
  assoc('action', { id: 1, label: '??? Action', name: 'Action name ???' }),
  assoc('firstName', deriveFirstName(applicant)),
  assoc('lastName', deriveLastName(applicant)),
  assoc('loginLink', deriveLoginLink(applicant)),
)(applicant)

const normalizedApplications = compose(
  map(application => assoc('statusLabel', deriveStatusLabel(application), application)),
  map(application => assoc('applicant', normalizedApplicant(application.applicant), application)),
  camelizeKeys,
  defaultTo(nool),
)

const withData = graphql(allApplicationsQuery, {
  props: ({ data: { allApplications, loading, refetch } }) => ({
    allApplications: normalizedApplications(allApplications),
    isLoading: loading,
    refetch,
  }),
})

const omits = ['history', 'match']
const omitProps = mapProps(props => ({
  ...omit(omits, props),
}))

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withData,
  omitProps,
  withLoader,
)(ApplicationCards)
