import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { TMenuItem } from "../common/types"

interface IProps {
  item: TMenuItem
}

const actionForMenuItem = (item: TMenuItem) => {
  switch (item) {
    case 'Profile': {
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
  return (
    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={() => actionForMenuItem(props.item)}>
      <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 24, backgroundColor: '#DDD', borderRadius: 4 }}>
        <Text style={{ paddingLeft: 16 }}>{props.item}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default SettingsListItem