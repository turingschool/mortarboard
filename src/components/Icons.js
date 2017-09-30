// @flow
import React from 'react'
import { Svg } from 'glamorous'

export const RocketIcon = ({ ...props }: any) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M24,0 C24,0 23.4836048,9.80252996 16.4820958,15.2719707 L16.4128111,19.0346251 L11.4820194,24 L11.4746834,20.2882431 L9.63105705,18.6292449 C8.29671435,22.7691304 1.26439406,22.7691304 1.26439406,22.7691304 C1.26439406,22.7691304 1.26439406,16.3396736 5.58319762,14.4450082 L3.94220876,12.6079505 L-2.84217094e-14,12.6079505 L5.07440302,7.66843342 L8.7285621,7.58627726 C14.4472436,0.671411685 24,0 24,0 Z M16.425,10.1644246 C17.8333261,10.1644246 18.975,9.01830529 18.975,7.60449544 C18.975,6.19068562 17.8333261,5.0445663 16.425,5.0445663 C15.0166739,5.0445663 13.875,6.19068562 13.875,7.60449544 C13.875,9.01830529 15.0166739,10.1644246 16.425,10.1644246 Z" />
    </g>
  </Svg>
)

RocketIcon.defaultProps = {
  width: 24,
  height: 24,
}

export const ChevronIcon = ({ ...props }: any) => (
  <Svg viewBox="0 0 17 32" {...props}>
    <g
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      transform="translate(-8.000000, 0.000000)"
    >
      <path d="M21.9828924,31.4791431 L8.51757806,17.9345065 C7.85052205,17.2635069 7.82510093,16.1840788 8.45956392,15.4817934 L21.9248782,0.582086057 C22.58178,-0.144913604 23.6995284,-0.197842151 24.4213321,0.462300399 C25.1436329,1.12294295 25.1969605,2.24701385 24.5404138,2.97358494 L12.2086828,16.6190072 L24.4823996,28.9652871 C25.1725335,29.6592868 25.1725335,30.7851434 24.4823996,31.4791431 C24.1372262,31.8263572 23.6850426,32 23.232646,32 C22.7802494,32 22.3280658,31.8263572 21.9828924,31.4791431 Z" />
    </g>
  </Svg>
)

ChevronIcon.defaultProps = {
  width: 17,
  height: 32,
}

export const ChevronIconThin = ({ ...props }: any) => (
  <Svg viewBox="0 0 16 30" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-8.000000, -1.000000)"
    >
      <polyline points="23 31 9 16.7142331 23 1" />
    </g>
  </Svg>
)

ChevronIconThin.defaultProps = {
  width: 16,
  height: 30,
}

// -------------------------------------

type Props = {
  kind: string,
}

export default ({ kind, ...props }: Props) => {
  switch (kind) {
    case 'ChevronIcon':
      return <ChevronIcon {...props} />
    case 'ChevronIconThin':
      return <ChevronIconThin {...props} />
    case 'RocketIcon':
    default:
      return <RocketIcon {...props} />
  }
}
