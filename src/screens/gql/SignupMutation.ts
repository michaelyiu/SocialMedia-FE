import { gql } from '@apollo/client'

export const SIGNUP_MUTATION = gql`
  mutation signup($input: SignupInput) {
    signup(input: $input) {
      avatar
      date
      email
      id
      name
    }
  }
`