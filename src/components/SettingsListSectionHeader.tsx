import { useState } from "react"
import { View, Text } from "react-native"

interface IProps {
  icon: JSX.Element
  title: string
}
const SettingsListSectionHeader = (props: IProps) => {
  const { icon, title } = props
  return (
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 24 }}>
      {icon}
      <Text style={{ marginLeft: 16, fontWeight: '600' }}>{title}</Text>
    </View>

  )
}

export default SettingsListSectionHeader