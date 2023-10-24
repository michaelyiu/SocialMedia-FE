import { gql } from '@apollo/client'

export const GET_PROFILE_QUERY = gql`
  query Profile($email: String) {
    profile(email: $email) {
      bio
      company
      date
      education {
        current
        degree
        description
        fieldOfStudy
        from
        id
        school
        to
      }
      experience {
        id
        title
        company
        location
        from
        to
        current
        description
      }
      githubUsername
      handle
      location
      skills
      status
      user {
        id
        name
        email
        avatar
        date
      }
      website
    }
  }
`





