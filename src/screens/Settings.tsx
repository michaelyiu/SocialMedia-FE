import { useState } from "react"
import { Text, SafeAreaView, SectionList } from "react-native"
import SettingsListItem from "../components/SettingsListItem"
import SettingsListSectionHeader from "../components/SettingsListSectionHeader"
import { TMenuItem } from "../common/types"

interface ISettingsData {
  title: string
  icon: JSX.Element | null
  data: TMenuItem[]
}

const Dashboard = () => {
  const settingsData: ISettingsData[] = [
    {
      title: 'About',
      icon: null,
      data: ['profile', 'experience', 'education']
    },
    {
      title: 'Help',
      icon: null,
      data: ['logout']
    }
  ]
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <SectionList
        sections={settingsData}
        renderItem={(props) => {
          return <SettingsListItem
            item={props.item}
          />
        }}
        renderSectionHeader={({ section: { title, icon } }) => (
          <SettingsListSectionHeader title={title} />
        )}
      />
    </SafeAreaView>

  )
}

export default Dashboard