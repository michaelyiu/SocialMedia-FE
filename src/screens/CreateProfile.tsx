import { SetStateAction, useEffect, useState, useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, TouchableOpacity } from "react-native"
import { useMutation, useQuery } from "@apollo/client"
// import { GET_POSTS_QUERY } from "./gql/GetPostsQuery"
import { GET_PROFILE_QUERY } from "./gql/GetProfileQuery";
import { GET_USER_QUERY as GET_CURRENT_USER_QUERY } from "./gql/GetUserQuery"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"
import { useForm } from "../hooks/useForm";
import { UPDATE_PROFILE_MUTATION } from "./gql/UpdateProfileMutation";

const _ = require('lodash');

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: [],
    githubUsername: '',
    bio: '',
    social: {
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: ''
    }
  });



  const { values, handleChange, handleSubmit } = useForm(() => {
    updateProfile();
  }, {
    // displaySocialInputs: false,
    handle: !_.isEmpty(profile.handle) ? profile.handle : '',
    company: !_.isEmpty(profile.company) ? profile.company : '',
    website: !_.isEmpty(profile.website) ? profile.website : '',
    location: !_.isEmpty(profile.location) ? profile.location : '',
    status: !_.isEmpty(profile.status) ? profile.status : '',
    skills: !_.isEmpty(profile.skills) ? profile.skills.join(',') : '',
    githubUsername: !_.isEmpty(profile) ? profile.githubUsername : '',
    bio: !_.isEmpty(profile.bio) ? profile.bio : '',
    twitter: !_.isEmpty(profile.social.twitter) ? profile.social.twitter : '',
    facebook: !_.isEmpty(profile.social.facebook) ? profile.social.facebook : '',
    linkedin: !_.isEmpty(profile.social.linkedin) ? profile.social.linkedin : '',
    youtube: !_.isEmpty(profile.social.youtube) ? profile.social.youtube : '',
    instagram: !_.isEmpty(profile.social.instagram) ? profile.social.instagram : '',
    // errors: {}
  })

  const [updateProfile, { loading, data, error }] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      variables: values,
      onCompleted(data) {
        console.log(data)
        if (data && data.updateProfile) {
          setProfile(data.updateProfile);
          setProfile(data.updateSocials);
        }
      }
    }
  )
  console.log("🚀 ~ file: CreateProfile.tsx:69 ~ CreateProfile ~ values:", values)
  // const [handle, onHandleChange] = useState('')
  // const [status, onStatusChange] = useState('')
  // const [company, onCompanyChange] = useState('')
  // const [website, onWebsiteChange] = useState('')

  // Select options for status
  // const options = [
  //   { label: '* Select Professional Status', value: 0, disabled: 'disabled' },
  //   { label: 'Developer', value: 'Developer' },
  //   { label: 'Information Security Specialist', value: 'Information Security Specialist' },
  //   { label: 'Network Administrator', value: 'Network Administrator' },
  //   { label: 'Network Engineer', value: 'Network Engineer' },
  //   { label: 'Database Administrator', value: 'Database Administrator' },
  //   { label: 'Blockchain Developer', value: 'Blockchain Developer' },
  //   { label: 'Information Technology Analysts', value: 'Information Technology Analysts' },
  //   { label: 'Information Security', value: 'Information Security' },
  //   { label: 'Quality Assurance Analyst', value: 'Quality Assurance Analyst' },
  //   { label: 'Web Administrator', value: 'Web Administrator' },
  //   { label: 'Manager', value: 'Manager' },
  //   { label: 'Instructor', value: 'Instructor' },
  //   { label: 'Intern', value: 'Intern' },
  //   { label: 'Administrative Assistant', value: 'Administrative Assistant' },
  //   { label: 'Receptionist', value: 'Receptionist' }
  // ];

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create your profile</Text>
      <Text>Let's get some information to make your profile stand out!</Text>
      <Text style={styles.inputText}>
        Email
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          // style={styles.input}
          onChangeText={(text) => handleChange('handle', text)}
          value={values.handle}
        />
      </View>
      <Text style={styles.inputText}>
        Status
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          // style={styles.input}
          onChangeText={(text) => handleChange('status', text)}
          value={values.status}
        />
      </View>
      <Text style={styles.inputText}>
        Company
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          // style={styles.input}
          onChangeText={(text) => handleChange('company', text)}
          value={values.company}
        />
      </View>
      <Text style={styles.inputText}>
        Company
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          // style={styles.input}
          onChangeText={(text) => handleChange('website', text)}
          value={values.website}
        />
      </View>
      {/* {CreateProfileContent} */}
    </SafeAreaView >
    // <TextInput
    //     value={values.password}
    //     onChangeText={(text) => handleChange('password', text)}
    //   />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003F5C'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FB5B5A',
    borderRadius: 12,
    elevation: 3,
    paddingVertical: 20,
    marginVertical: 16,
    width: 150
  },
  buttonText: {
    color: 'white',
    letterSpacing: 2
  },
  input: {
    flex: 1,
    height: 45,
    marginLeft: 16,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    height: 45,
    marginBottom: 20,
    width: 250,
  },
  inputText: {
    color: 'white',
    marginBottom: 5,
    width: 250,
  }
})


export default CreateProfile