import { gql } from '@apollo/client'

export const UPDATE_PROFILE_MUTATION = gql`
	mutation updateProfile($handle: String!, $company: String, $website: String, $location: String, $status: String!, $skills: String!, $bio: String, $githubUsername: String, $youtube: String, $twitter: String, $facebook: String, $linkedin: String, $instagram: String){
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
		updateSocials(youtube: $youtube, twitter: $twitter, facebook: $facebook, linkedin: $linkedin, instagram: $instagram){
			youtube
			twitter
			facebook
			linkedin
			instagram
		}
	}
`;