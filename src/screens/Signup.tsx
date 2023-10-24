import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native"

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Signup</Text>
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
  text: {
    color: 'white',
    letterSpacing: 2
  }
})

export default Test