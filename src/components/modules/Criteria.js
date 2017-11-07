// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import type { Location } from 'react-router-dom'
import CriterionModule from './Criterion'
import Loader from '../blocks/Loader'
import SectionContainment from '../elements/SectionContainment'
import type { Criterion } from '../../types/Criterion'

type Props = {
  children: Node,
  criteria: Array<Criterion>,
  refetch: Function,
  location: Location,
}

export default class extends React.PureComponent<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.refetch()
    }
  }

  render() {
    const { criteria, children, refetch } = this.props
    return (
      <SectionContainment>
        <Criteria>
          {criteria && criteria.map(criterion => (
            <CriterionModule
              criterion={criterion}
              key={criterion.id}
              refresh={() => refetch()}
            />
          ))}
        </Criteria>
        {children}
      </SectionContainment>
    )
  }
}

export const ModuleLoader = () => (
  <Loader>Loading Evaluations...</Loader>
)

// -------------------------------------

const Criteria = glamorous.section({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 6,
  paddingBottom: 32,
  '& > *': {
    marginTop: 48,
  },
})
