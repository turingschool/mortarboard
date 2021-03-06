// @flow
import React from 'react'
import { Svg } from 'glamorous'

type Props = {
  width?: number,
  height?: number,
}

// -------------------------------------

export const ChevronIcon = ({ ...props }: Props) => (
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

// -------------------------------------

export const ChevronIconThin = ({ ...props }: Props) => (
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
  width: 12,
  height: 24,
}

// -------------------------------------

export const ChevronXIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 28 28" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="27.155 0 14.224 12.931 0 0" />
      <g transform="translate(13.577500, 19.465500) scale(1, -1) translate(-13.577500, -19.465500)">
        <polyline points="27.155 13 14.224 25.931 0 13" />
      </g>
    </g>
  </Svg>
)

ChevronXIcon.defaultProps = {
  width: 28,
  height: 28,
}

// -------------------------------------

export const ErrorIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 26 26" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
    >
      <g stroke="currentColor">
        <path d="M24.9977757,12.792875 C25.1127757,19.419875 19.6267757,24.886875 12.9997757,25.001875 C6.37377574,25.116875 1.11577574,19.836875 1.00177574,13.210875 C0.886775744,6.58287499 6.37277574,1.11587499 12.9997757,1.00187499 C19.6267757,0.885874988 24.8827757,6.16687499 24.9977757,12.792875 Z" />
        <path d="M12.9997757,14.635675 L12.9997757,6.99967499" />
      </g>
      <g fill="currentColor">
        <path d="M11.9087757,18.472175 C11.9187757,19.069175 12.4047757,19.544175 12.9987757,19.544175 C13.6207757,19.533175 14.1017757,19.037175 14.0907757,18.435175 C14.0797757,17.839175 13.5947757,17.363175 13.0007757,17.363175 C12.3787757,17.373175 11.8977757,17.871175 11.9087757,18.472175 Z" />
      </g>
    </g>
  </Svg>
)

ErrorIcon.defaultProps = {
  width: 26,
  height: 26,
}

// -------------------------------------

export const MagGlassIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 28 28" {...props} >
    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
      <g transform="translate(-40.000000, -119.000000)">
        <g transform="translate(19.000000, 104.000000)">
          <g transform="translate(23.000000, 17.000000)">
            <path d="M17.7401739,8.86956522 C17.7401739,3.97147826 13.7681739,0 8.86956522,0 C3.972,0 0,3.97147826 0,8.86956522 C0,13.7676522 3.972,17.7391304 8.86956522,17.7391304 C13.7681739,17.7391304 17.7401739,13.7676522 17.7401739,8.86956522 Z" />
            <path d="M15.2007652,15.1997217 L23.9998957,23.9998957" />
          </g>
        </g>
      </g>
    </g>
  </Svg>
)

MagGlassIcon.defaultProps = {
  width: 32,
  height: 32,
}

// -------------------------------------

export const ResetIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 26 23" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      transform="translate(-240.000000, -40.000000)"
    >
      <polyline points="241.3577 49.0464 244.4117 53.4104 248.3397 49.0464" />
      <path d="M244.4121,53.4102 C243.8781,46.3682 248.7491,41.4122 254.5191,41.1992 C260.2881,40.9872 265.1381,45.4932 265.3501,51.2622 C265.5651,57.0312 261.0581,61.8822 255.2881,62.0932" />
    </g>
  </Svg>
)

ResetIcon.defaultProps = {
  width: 26,
  height: 23,
}

// -------------------------------------

export const RocketIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M24,0 C24,0 23.4836048,9.80252996 16.4820958,15.2719707 L16.4128111,19.0346251 L11.4820194,24 L11.4746834,20.2882431 L9.63105705,18.6292449 C8.29671435,22.7691304 1.26439406,22.7691304 1.26439406,22.7691304 C1.26439406,22.7691304 1.26439406,16.3396736 5.58319762,14.4450082 L3.94220876,12.6079505 L-2.84217094e-14,12.6079505 L5.07440302,7.66843342 L8.7285621,7.58627726 C14.4472436,0.671411685 24,0 24,0 Z M16.425,10.1644246 C17.8333261,10.1644246 18.975,9.01830529 18.975,7.60449544 C18.975,6.19068562 17.8333261,5.0445663 16.425,5.0445663 C15.0166739,5.0445663 13.875,6.19068562 13.875,7.60449544 C13.875,9.01830529 15.0166739,10.1644246 16.425,10.1644246 Z" />
    </g>
  </Svg>
)

RocketIcon.defaultProps = {
  width: 32,
  height: 32,
}

// -------------------------------------

export const SelectChevronIcon = ({ ...props }: Props) => (
  <Svg viewBox="0 0 21 12" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <polyline points="19.182 1.067 10.611 10.067 1.182 1.067" />
    </g>
  </Svg>
)

SelectChevronIcon.defaultProps = {
  width: 21,
  height: 12,
}

// -------------------------------------

const Icons = ({ kind, ...props }: { kind?: string | null | void }) => {
  switch (kind) {
    case 'ChevronIcon':
      return <ChevronIcon {...props} />
    case 'ChevronIconThin':
      return <ChevronIconThin {...props} />
    case 'ChevronXIcon':
      return <ChevronXIcon {...props} />
    case 'ErrorIcon':
      return <ErrorIcon {...props} />
    case 'MagGlassIcon':
      return <MagGlassIcon {...props} />
    case 'ResetIcon':
      return <ResetIcon {...props} />
    case 'RocketIcon':
      return <RocketIcon {...props} />
    case 'SelectChevronIcon':
      return <SelectChevronIcon {...props} />
    default:
      return null
  }
}

Icons.defaultProps = {
  kind: null,
}

export default Icons
