// @flow
import { withRouter } from 'react-router-dom'
import { compose, mapProps, pure, withHandlers, withStateHandlers } from 'recompose'
import ApplicantCreateForm from '../components/ApplicantCreateForm'
import withLog from './withLog'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  birthdate: '',
  github: '',
  referredBy: '',
  resume: '',
}

const withStateUpdates = withStateHandlers(
  () => (initialState),
  {
    handleChange: () => e => ({
      [e.target.name]: e.target.value,
    }),
  },
)

const withEventHandlers = withHandlers({
  handleSubmit: props => (e) => {
    e.preventDefault()
    const body = document && document.body
    const form = body && body.querySelector(`form[action="${props.action}"]`)
    // $FlowFixMe
    const isFormValid = form && form.checkValidity()
    // eslint-disable-next-line
    console.log('Yo! ApplicantCreate form was submitted!', props, isFormValid)
    return props
  },
})

const withProps = mapProps(props => ({
  action: props.location.pathname,
}))

export default compose(
  withRouter,
  withStateUpdates,
  withProps,
  withEventHandlers,
  pure,
  withLog,
)(ApplicantCreateForm)
