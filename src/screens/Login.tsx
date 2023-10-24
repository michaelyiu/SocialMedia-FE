import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native"
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "./gql/LoginMutation"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = () => {
  const [email, onEmailChange] = useState('')
  const [password, onPasswordChange] = useState('')

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      input: {
        email,
        password,
      }
    },
    onCompleted: async (newData) => {
      try {
        await AsyncStorage.setItem("token", JSON.stringify(newData.token))
      } catch (e) {
        console.error(e)
      }
    }
  })

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


export default Login