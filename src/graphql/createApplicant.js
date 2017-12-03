import gql from 'graphql-tag'

export default gql`
  mutation createApplicant(
    $firstName: String!,
    $lastName: String!
    $email: String!
    $birthdate: String
    $github: String
    $referredBy: String
    $resume: String
  ) {
    createApplicant(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      birthdate: $birthdate,
      github: $github,
      referredBy: $referredBy,
      resume: $resume
      ) {
        id
        firsName
        lastName
        email
        birthdate
        github
        referredBy
        resume
    }
  }
`
