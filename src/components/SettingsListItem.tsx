import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput } from "react-native"
import { TMenuItem } from "../common/types"

interface IProps {
  item: TMenuItem
}
const SettingsListItem = (props: IProps) => {
  return (
    <SafeAreaView>
      <Text>{props.item}</Text>
    </SafeAreaView>

  )
}

export default SettingsListItem