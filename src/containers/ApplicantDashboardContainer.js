// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import {
  branch,
  compose,
  mapProps,
  onlyUpdateForKeys,
  renderComponent,
  withHandlers,
} from 'recompose'
import deleteApplicant from '../mutations/deleteApplicant'
import ApplicantComponent, { ComponentLoader } from '../components/ApplicantComponent'
import withApplicant from './withApplicant'

const propsWhitelist = ['applicant', 'isLoading', 'match']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
  isApplicantEditable: true,
  isEvaluatable: true,
  replace: props.history.replace,
}))

const keyWhitelist = ['isLoading', 'applicant']
const withUpdateForKeys = component => compose(
  onlyUpdateForKeys(keyWhitelist),
)(component)

const withMutations = component => compose(
  graphql(deleteApplicant, { name: 'deleteApplicantMutation' }),
)(component)

const withEventHandlers = withHandlers({
  handleDelete: props => async () => {
    await setTimeout(() => { console.log('Yo! handleDelete is not wired up', props) }, 1000)
    // const { applicant, deleteApplicantMutation, replace } = props
    // await deleteApplicant({ variables: { id: applicant.id } })
    // replace('/')
  },
})

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withApplicant,
  withProps,
  withUpdateForKeys,
  withMutations,
  withEventHandlers,
  withLoader,
)(ApplicantComponent)
