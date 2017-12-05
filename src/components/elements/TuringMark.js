// @flow
import React from 'react'
import { always } from 'ramda'
import { BASE_URL } from '../../constants/networking'

const markSrc = always(`${BASE_URL}/turing-school-mark-256.png`)

type Props = {
  width?: number,
  height?: number,
}

const TuringMark = ({ width, height }: Props) => (
  <img
    alt="turing school mark"
    src={markSrc()}
    width={width}
    height={height}
  />
)

TuringMark.defaultProps = {
  width: 48,
  height: 48,
}

export default TuringMark
