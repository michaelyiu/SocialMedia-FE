import { gql } from '@apollo/client'

export const GET_POSTS_QUERY = gql`
  query Query {
    posts {
      avatar
      comments {
        handle
        date
        avatar
        id
        name
        text
        user
      }
      date
      handle
      id
      likes {
        id
        user
      }
      name
      text
      user
    }
  }
`