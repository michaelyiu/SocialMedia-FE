import { gql } from '@apollo/client'

export const GET_USER_MUTATION = gql`
  query user($email: String) {
    user(email: $email) {
      id
      name
      email
      avatar
      date
    }
  }
`