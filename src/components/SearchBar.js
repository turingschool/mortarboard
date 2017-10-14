// @flow
import React from 'react'
import glamorous from 'glamorous'
import AppContainment from './elements/AppContainment'
import { MagGlassIcon } from './elements/Icons'


type Props = {
  action: string,
  forId: string,
  handleChange: Function,
  handleSubmit: Function,
  value: string,
}

export default({ action, forId, handleChange, handleSubmit, value }: Props) => (
  <AppContainment marginBottom={40} >
    <Form
      acceptCharset="UTF-8"
      action={action}
      method="get"
      onSubmit={handleSubmit}
    >
      <Label htmlFor={forId}>
        <Icon><MagGlassIcon /></Icon>
        <Input
          aria-label="Search for applicants"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          id={forId}
          onChange={handleChange}
          placeholder="Search Applicants"
          type="search"
          value={value}
        />
      </Label>
    </Form>
  </AppContainment>
)

// -------------------------------------

const Form = glamorous.form({
  position: 'relative',
  backgroundColor: '#fff',
})

const Label = glamorous.label({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: '#808080',
})

const Input = glamorous.input({
  width: '100%',
  margin: 0,
  padding: 8,
  paddingLeft: 40,
  fontFamily: 'inherit',
  fontSize: 34,
  fontWeight: 200,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '1px solid',
  outline: 'none',
  WebkitAppearance: 'textfield',
})

const Icon = glamorous.span({
  position: 'absolute',
  top: 12,
  left: 0,
})
