// @flow
import React, { PureComponent } from 'react'
import { css } from 'glamor'
import { easeInOutCubic } from '../../constants/style'

// -------------------------------------
// Use glamor so Input tag can be dynamically set to `input` or `textarea`

const controlRules = css({
  position: 'relative',
  display: 'flex',
  flexFlow: 'column wrap',
  width: '100%',
  marginBottom: 48,
})

const inputRules = css({
  width: '100%',
  margin: 0,
  padding: 8,
  fontFamily: 'inherit',
  fontSize: 32,
  fontWeight: 200,
  color: '#111',
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '1px solid #c1c1c1',
  outline: 0,
  transitionDuration: '0.4s',
  transitionProperty: 'border-color, color, opacity',
  WebkitAppearance: 'textfield',
  '.isTouched &:invalid': {
    borderColor: 'red',
  },
  '[type="textarea"]': {
    minHeight: 128,
    overflow: 'auto',
  },
  ':focus': {
    borderBottomColor: 'currentColor',
  },
  '::placeholder': {
    color: '#c1c1c1',
  },
})

const labelRules = css({
  position: 'absolute',
  bottom: 2,
  right: 0,
  zIndex: 2,
  paddingTop: 16,
  paddingBottom: 8,
  paddingLeft: 32,
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '#808080',
  backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 24px)',
  transition: `opacity 0.4s, transform 0.4s ${easeInOutCubic}`,
  ':focus + &': {
    opacity: 1,
    backgroundImage: 'none',
    transform: 'translate3d(0, calc(100% - 12px), 0)',
    transitionDelay: '0.8s',
  },
})

// -------------------------------------

type Props = {
  forId: string,
  label: string,
  onBlur?: Function | null,
  onChange: Function,
  placeholder: string,
  tag?: string,
  type?: string,
  value: string,
}

type State = {
  isTouched: boolean,
}

export default class extends PureComponent<Props, State> {
  static defaultProps = {
    onBlur: null,
    tag: 'input',
    type: 'text',
  }

  state = {
    isTouched: false,
  }

  onBlur = (e: Event) => {
    if (!this.state.isTouched) {
      this.setState(() => ({ isTouched: true }))
    }
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e)
    }
  }

  render() {
    const {
      forId,
      label,
      onChange,
      placeholder,
      tag,
      type,
      value,
      ...props
    } = this.props
    const { isTouched } = this.state
    const Input = tag != null ? tag : 'input'

    return (
      <label
        className={`${controlRules} ${isTouched ? 'isTouched' : ''}`}
        htmlFor={forId}
      >
        <Input
          aria-label={label}
          className={inputRules}
          id={forId}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          {...props}
        />
        <span className={labelRules}>{label}</span>
      </label>
    )
  }
}
