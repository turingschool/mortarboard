// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import Evaluation from './Evaluation'
import Loader from '../blocks/Loader'
import SectionContainment from '../elements/SectionContainment'
import type { ApplicantType, LocationType } from '../../types/flowtypes'

type Props = {
  children: Node,
  allEvaluations: Array<ApplicantType>,
  refetch: Function,
  location: LocationType,
}

export default class extends React.PureComponent<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.refetch()
    }
  }

  render() {
    const { allEvaluations, children, refetch } = this.props
    return (
      <SectionContainment>
        <Evaluations>
          {allEvaluations && allEvaluations.map((evaluation, i) => (
            <Evaluation
              evaluation={evaluation}
              isOpen={i === 0}
              key={evaluation.id}
              refresh={() => refetch()}
            />
          ))}
        </Evaluations>
        {children}
      </SectionContainment>
    )
  }
}

export const ModuleLoader = () => (
  <Loader>Loading Evaluations...</Loader>
)

// -------------------------------------

const Evaluations = glamorous.section({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 6,
  '& > *': {
    marginTop: 48,
  },
})
