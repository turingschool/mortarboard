// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { COLORS } from '../../constants/theme'
import { SelectChevronIcon } from './Icons'

type Props = {
  children: Node,
  label: string,
  name: string,
  onChange: Function,
  value: string,
}

export default ({ children, label, name, onChange, value, ...props }: Props) => (
  <Label htmlFor={name}>
    <Select
      aria-label={label}
      id={name}
      name={name}
      onChange={onChange}
      value={value}
      {...props}
    >
      { children }
    </Select>
    <SelectIcon>
      <SelectChevronIcon />
    </SelectIcon>
  </Label>
)

// -------------------------------------

const Label = glamorous.label({
  position: 'relative',
})

const Select = glamorous.select({
  WebkitAppearance: 'button',
  WebkitBorderRadius: 0,
  WebkitBoxShadow: 'none',
  WebkitPaddingEnd: 0,
  WebkitPaddingStart: 0,
  WebkitUserSelect: 'none',
  width: '100%',
  height: 48,
  margin: 0,
  padding: '0 32px',
  overflow: 'hidden',
  fontSize: 14,
  fontFamily: 'inherit',
  textTransform: 'uppercase',
  color: COLORS.WHITE,
  backgroundColor: COLORS.GREY_4,
  backgroundImage: 'none',
  backgroundPosition: 'initial',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
  border: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ':focus': {
    borderColor: COLORS.GREY_9,
    outline: 0,
  },
})

const SelectIcon = glamorous.div({
  position: 'absolute',
  top: 'calc(50% - 8px)',
  right: 32,
  color: COLORS.WHITE,
  pointerEvents: 'none',
})
