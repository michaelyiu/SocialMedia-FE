import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native"
import gql from 'graphql-tag'
import { useQuery, useMutation } from "@apollo/client"
import { USERS_QUERY } from "./UserQuery"
import { SIGNUP_MUTATION } from "./gql/SignupMutation"
const Signup = () => {
  const [email, onEmailChange] = useState('s')
  const [name, onNameChange] = useState('')
  const [password, onPasswordChange] = useState('')
  const [password2, onPassword2Change] = useState('')
  // const { data, loading, error } = useQuery(USERS_QUERY)
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: {
      input: {
        email,
        name,
        password,
        password2
      }
    }
  })

  console.log("🚀 ~ file: Signup.tsx:23 ~ Signup ~ email:", email)
  console.log("🚀 ~ file: Signup.tsx:24 ~ Signup ~ name:", name)
  console.log("🚀 ~ file: Signup.tsx:25 ~ Signup ~ password:", password)
  console.log("🚀 ~ file: Signup.tsx:26 ~ Signup ~ password2:", password2)
  console.log("🚀 ~ file: Signup.tsx:22 ~ Signup ~ data:", data)
  console.log("🚀 ~ file: Signup.tsx:23 ~ Signup ~ loading:", loading)
  console.log("🚀 ~ file: Signup.tsx:24 ~ Signup ~ error:", error)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inputText}>
        Email
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onEmailChange}
          value={email}
        />
      </View>
      <Text style={styles.inputText}>
        Name
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onNameChange}
          value={name}
        />
      </View>
      <Text style={styles.inputText}>
        Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
        />
      </View>
      <Text style={styles.inputText}>
        Confirm Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onPassword2Change}
          value={password2}
        />
      </View>
      <Pressable style={styles.button} onPress={() => signup()}>
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
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

export default Signup