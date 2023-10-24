import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native"
import { useMutation, useQuery } from "@apollo/client"
import { LOGIN_MUTATION } from "./gql/LoginMutation"
import { GET_USER_QUERY } from "./gql/GetUserQuery"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = () => {
  const [email, onEmailChange] = useState('')
  const [password, onPasswordChange] = useState('')

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      input: {
        email,
        password,
      }
    },
    onCompleted: async (newData) => {
      try {
        await AsyncStorage.setItem("token", JSON.stringify(newData.login.token))
        await AsyncStorage.setItem("email", JSON.stringify(newData.login.email))
      } catch (e) {
        console.error(e)
      }
    }
  })

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      email: email
    }
  })

  console.log("🚀 ~ file: Login.tsx:36 ~ Login ~ data:", data)
  console.log("🚀 ~ file: Login.tsx:37 ~ Login ~ error:", error)

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
        Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
        />
      </View>
      <Pressable style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Login</Text>
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


export default Login