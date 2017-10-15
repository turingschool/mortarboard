// @flow
import React from 'react'
import glamorous from 'glamorous'
import TextLink from '../elements/TextLink'

type Props = {
  score?: number | null,
  term: string,
  to?: string | null,
}

const EvaluationSummary = ({ score, term, to, ...props }: Props) => (
  <View {...props}>
    <Heading>
      <TermText>{term}</TermText>
      {score != null &&
        <ScoreText>{score}</ScoreText>
      }
    </Heading>
    { to != null &&
      <ScoreLink to={to}>
        {`${score != null ? 'Re-' : ''}Score Evaluation`}
      </ScoreLink>
    }
  </View>
)

EvaluationSummary.defaultProps = {
  score: null,
  to: null,
}

export default EvaluationSummary

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 48,
  borderBottom: '1px solid #ccc',
})

const Heading = glamorous.h2({
  display: 'flex',
  flexFlow: 'row nowrap',
  fontSize: 28,
  fontWeight: 300,
  color: '#808080',
})

const TermText = glamorous.span()

const ScoreText = glamorous.span({
  color: '#8ad30e',
  marginLeft: 8,
  '&::before': {
    content: ' : ',
    color: '#808080',
  },
})

const ScoreLink = glamorous(TextLink)({
  fontSize: 18,
})
