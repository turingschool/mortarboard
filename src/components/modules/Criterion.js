// @flow
import React from 'react'
import glamorous from 'glamorous'
import { pure } from 'recompose'
import { compose, dec, map, memoizeWith, identity, length, subtract } from 'ramda'
import { mapIndexed } from '../../lib/utils'
import { COLORS, MQ } from '../../constants/theme'
import { ChevronXIcon } from '../elements/Icons'
import Select from '../elements/Select'
import type { Criterion } from '../../types/Criterion'

type Props = {
  criterion: Criterion,
  handleChange: () => {},
  isOpen: boolean,
  score: string,
}

const len = memoizeWith(identity, compose(dec, length))

const getCount = (list, index) => (
  subtract(len(list), index)
)

export default pure(({ criterion, handleChange, isOpen, score }: Props) => (
  <Details open={isOpen}>
    <Summary>
      <SummaryFlex>
        <span>{criterion.title}</span>
        <span>{score ? 'score' : ''}</span>
      </SummaryFlex>
      <ChevronXIcon />
    </Summary>
    <Content>
      <Scoring>
        <Select label="Score" name={criterion.name} onChange={handleChange} value={score}>
          <option value={null}>Score</option>
          <option value={0}>0 - Bad</option>
          <option value={1}>1 - Meh</option>
          <option value={2}>2 - Good</option>
          <option value={3}>3 - Excellent</option>
        </Select>
      </Scoring>
      <Questions>
        {map(question => (
          <Question key={question}>
            {question}
          </Question>
        ), criterion.questions)}
      </Questions>
      <OptionDl>
        {mapIndexed((option, index) => (
          <OptionItem key={option}>
            <OptionDt>{getCount(criterion.options, index)}</OptionDt>
            <OptionDd>{option}</OptionDd>
          </OptionItem>
        ), criterion.options)}
      </OptionDl>
    </Content>
  </Details>
))

// -------------------------------------

const Details = glamorous.details({
})

const Summary = pure(glamorous.summary({
  position: 'relative',
  minHeight: 48,
  fontSize: 28,
  fontWeight: 200,
  color: COLORS.GREY_8,
  borderBottom: '1px solid',
  outline: 0,
  cursor: 'pointer',
  '&::-webkit-details-marker': {
    display: 'none',
  },
  '&:first-of-type': {
    listStyleType: 'none',
  },
  'details[open] > &': {
    color: COLORS.GREY_4,
  },
  '& > svg': {
    position: 'absolute',
    top: 8,
    right: 0,
  },
  // Yo! Using a `not` filter here
  'details:not([open]) > & > svg': {
    top: 16,
  },
  // Yo! Also using a `not` filter here
  'details:not([open]) > & > svg g:nth-child(2)': {
    opacity: 0,
  },
}))

const SummaryFlex = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: 48,
  '& > span + span': {
    color: COLORS.BLUE,
  },
})

const Content = glamorous.div({
  position: 'relative',
  paddingTop: 44,
  paddingBottom: 48,
})

const Scoring = glamorous.div({
  width: 256,
  [MQ.MIN_BREAK_48]: {
    position: 'absolute',
    right: 0,
  },
})

const Questions = glamorous.ol({
  listStyle: 'none',
  margin: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 38,
  paddingLeft: 48,
  color: COLORS.GREY_4,
})

const Question = glamorous.li({
  fontSize: 16,
  margin: 0,
  marginBottom: 24,
})

const OptionDl = glamorous.dl({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minHeight: 160,
  margin: 0,
  marginTop: 14,
  paddingTop: 32,
  paddingRight: 48,
  paddingBottom: 42,
  paddingLeft: 48,
  color: COLORS.GREY_4,
  backgroundColor: COLORS.GREY_E,
})

const OptionItem = glamorous.div({
  paddingRight: 32,
})

const OptionDt = glamorous.dt({
  marginBottom: 14,
  fontSize: 28,
  fontWeight: 200,
})

const OptionDd = glamorous.dd({
  marginLeft: 0,
})
