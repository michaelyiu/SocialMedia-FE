import { useState, } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useMutation } from "@apollo/client"
import { useForm } from "../hooks/useForm";
import { UPDATE_PROFILE_MUTATION } from "./gql/UpdateProfileMutation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


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
    // errors: {}
  })

  const [updateProfile, { loading, data, error }] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      variables: values,
      onCompleted(data) {
        console.log("🚀 ~ file: CreateProfile.tsx:51 ~ onCompleted ~ data:", data)
        if (data && data.updateProfile) {
          setProfile(data.updateProfile);
        }
      }
    }
  )
  console.log("🚀 ~ file: CreateProfile.tsx:69 ~ CreateProfile ~ values:", values)
  console.log("🚀 ~ file: CreateProfile.tsx:72 ~ CreateProfile ~ data:", data)
  console.log("🚀 ~ file: CreateProfile.tsx:73 ~ CreateProfile ~ error:", error)
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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25 }}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
      >
        <View style={{ margin: 25 }}>

          <Text style={{ fontWeight: '600', fontSize: 20 }}>Create your profile</Text>
          <Text style={{ marginTop: 5, marginBottom: 20 }}>Let's get some information to make your profile stand out!</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


            <Text style={styles.inputText}>
              Handle
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('handle', text)}
                value={values.handle}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Status
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('status', text)}
                value={values.status}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Company
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('company', text)}
                value={values.company}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Website
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('website', text)}
                value={values.website}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Location
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('location', text)}
                value={values.location}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Skills
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('skills', text)}
                value={values.skills}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              GitHub Username
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('githubUsername', text)}
                value={values.githubUsername}
                multiline
                numberOfLines={1}
              />
            </View>
            <Text style={styles.inputText}>
              Biography
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('bio', text)}
                value={values.bio}
                multiline
                numberOfLines={1}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text>Create</Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
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
    marginLeft: 16,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    height: 45,
    paddingBottom: 8,
    marginBottom: 20,
    width: '100%',
  },
  inputText: {
    color: 'black',
    width: '100%',
  }
})


export default CreateProfile