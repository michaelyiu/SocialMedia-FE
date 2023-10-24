import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { TMenuItem } from "../common/types"
import { useNavigation } from "@react-navigation/native"

interface IProps {
  item: TMenuItem
}

const actionForMenuItem = (item: TMenuItem, navigation) => {
  switch (item) {
    case 'Profile': {
      navigation.navigate('profile')
      break
    }
    case 'Experience': {
      break
    }
    case 'Education': {
      break
    }
    case 'Logout': {
      break
    }
  }
}

const SettingsListItem = (props: IProps) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={() => actionForMenuItem(props.item, navigation)}>
      <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 24, backgroundColor: '#DDD', borderRadius: 4 }}>
        <Text style={{ paddingLeft: 16 }}>{props.item}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default SettingsListItem