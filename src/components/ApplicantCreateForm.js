// @flow
import React from 'react'
import glamorous from 'glamorous'
import InputControl from './blocks/InputControl'
import SectionContainment from './elements/SectionContainment'

type Props = {
  action: string,
  handleChange: Function,
  handleSubmit: Function,
  firstName: string,
  lastName: string,
  email: string,
  birthdate: string,
  github: string,
  referredBy: string,
  resume: string,
}

export default({
  action,
  handleChange,
  handleSubmit,
  firstName,
  lastName,
  email,
  birthdate,
  github,
  referredBy,
  resume,
}: Props) => (
  <SectionContainment>
    <Form
      acceptCharset="UTF-8"
      action={action}
      method="get"
      onSubmit={handleSubmit}
    >
      <InputControl
        forId="ApplicantCreateFirstName"
        label="First name"
        onChange={handleChange}
        placeholder="David"
        value={firstName}
      />
      <InputControl
        forId="ApplicantCreateLastName"
        label="Last name"
        onChange={handleChange}
        placeholder="Puddy"
        value={lastName}
      />
      <InputControl
        forId="ApplicantCreateEmail"
        label="Email"
        onChange={handleChange}
        placeholder="puddy@gorangers.org"
        type="email"
        value={email}
      />
      <InputControl
        forId="ApplicantCreateBirthdate"
        label="Birthdate"
        onChange={handleChange}
        placeholder="06/06/06"
        type="date"
        value={birthdate}
      />
      <InputControl
        forId="ApplicantCreateGitHub"
        label="GitHub username"
        onChange={handleChange}
        placeholder="puddy"
        value={github}
      />
      <InputControl
        forId="ApplicantCreateReferredBy"
        label="Referred By"
        onChange={handleChange}
        placeholder="Bree Thomas"
        value={referredBy}
      />
      <InputControl
        forId="ApplicantCreateResume"
        label="Resume"
        onChange={handleChange}
        placeholder="Resume (tmp)"
        value={resume}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  </SectionContainment>
)

// -------------------------------------

const Form = glamorous.form({
  position: 'relative',
  backgroundColor: '#fff',
})

const Button = glamorous.button({
})
