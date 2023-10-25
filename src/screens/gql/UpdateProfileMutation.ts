import { gql } from '@apollo/client'

export const UPDATE_PROFILE_MUTATION = gql`
	mutation updateProfile($handle: String!, $company: String, $website: String, $location: String, $status: String!, $skills: String!, $bio: String, $githubUsername: String){
		updateProfile(handle: $handle, company: $company, website: $website, location: $location, status: $status, skills: $skills, bio: $bio, githubUsername: $githubUsername){
			handle
			company
			website
			location
			status
			skills
			bio
			githubUsername
		}
	}
`;