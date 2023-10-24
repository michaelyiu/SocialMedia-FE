import { gql } from '@apollo/client'

export const USERS_QUERY = gql`
  query users {
    users {
      id
      name
      email
    }
  }

`