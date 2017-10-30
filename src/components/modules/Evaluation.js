// @flow
import React from 'react'
import glamorous from 'glamorous'
import { pure } from 'recompose'
import { COLORS } from '../../constants/theme'
import { ChevronXIcon } from '../elements/Icons'
import type { EvaluationType } from '../../types/flowtypes'

type Props = {
  evaluation: EvaluationType,
  isOpen: boolean,
}

const questions = [
  'Tell me a little about yourself.',
  'Why do you want to be a developer?',
  'What have you done to work toward your goal?',
  'Why Turing? What makes Turing the best place for you?',
  'What do you think you would bring to the Turing community?',
  'What would success look like for you in seven months?',
]

export default pure(({ evaluation, isOpen }: Props) => (
  <Details open={isOpen}>
    <Summary>
      <span>{evaluation.name}</span>
      <ChevronXIcon />
    </Summary>
    <Content>
      <Questions>
        {questions.map(question => (
          <Question key={question}>
            {question}
          </Question>
        ))}
      </Questions>
      <CriteriaDl>
        <CriteriaItem>
          <CriteriaDt>3</CriteriaDt>
          <CriteriaDd>This is the list for 3</CriteriaDd>
        </CriteriaItem>
        <CriteriaItem>
          <CriteriaDt>2</CriteriaDt>
          <CriteriaDd>This is the list for 2</CriteriaDd>
        </CriteriaItem>
        <CriteriaItem>
          <CriteriaDt>1</CriteriaDt>
          <CriteriaDd>This is the list for 1</CriteriaDd>
        </CriteriaItem>
        <CriteriaItem>
          <CriteriaDt>0</CriteriaDt>
          <CriteriaDd>This is the list for 0</CriteriaDd>
        </CriteriaItem>
      </CriteriaDl>
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

const Content = glamorous.div({
  paddingTop: 44,
  paddingBottom: 48,
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

const CriteriaDl = glamorous.dl({
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

const CriteriaItem = glamorous.div({
})

const CriteriaDt = glamorous.dt({
  marginBottom: 14,
  fontSize: 28,
  fontWeight: 200,
})

const CriteriaDd = glamorous.dd({
  marginLeft: 0,
})
