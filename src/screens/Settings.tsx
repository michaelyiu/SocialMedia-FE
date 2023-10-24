import { useState } from "react"
import { Text, SafeAreaView, View, SectionList } from "react-native"
import SettingsListItem from "../components/SettingsListItem"
import SettingsListSectionHeader from "../components/SettingsListSectionHeader"
import { TMenuItem } from "../common/types"
import Icon from "react-native-vector-icons/FontAwesome"

interface ISettingsData {
  title: string
  icon: JSX.Element
  data: TMenuItem[]
}

const Settings = () => {
  const settingsData: ISettingsData[] = [
    {
      title: 'About',
      icon: <Icon name='book' size={30} color='#000' />,
      data: ['Profile', 'Experience', 'Education']
    },
    {
      title: 'Help',
      icon: <Icon name='question-circle' size={30} color='#000' />,
      data: ['Logout']
    }
  ]
  return (
    <SafeAreaView>
      <SectionList
        sections={settingsData}
        style={{ margin: 8 }}
        ItemSeparatorComponent={() => (<View style={{
          height: 5,
          width: '100%',
        }} />)}
        renderItem={(props) => {
          return <SettingsListItem
            item={props.item}
          />
        }}
        renderSectionHeader={({ section: { title, icon } }) => (
          <SettingsListSectionHeader icon={icon} title={title} />
        )}
      />
    </SafeAreaView>
  )
}

export default Settings