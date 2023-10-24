import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native"

interface IProps {
  // icon: JSX.Element
  title: string
}
const SettingsListItem = (props: IProps) => {
  const { title } = props
  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>

  )
}

export default SettingsListItem