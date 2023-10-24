import { gql } from '@apollo/client'

export const GET_USER_QUERY = gql`
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