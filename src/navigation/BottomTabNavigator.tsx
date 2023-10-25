import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "../screens/Dashboard"
import Profile from "../screens/Profile"
import Settings from "../screens/Settings"
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FB5B5A' },
        headerTintColor: 'white',
        headerTitle: () => (
          <Image
            resizeMode='center'
            style={{
              width: 20, height: 20, backgroundColor: '#FB5B5A'
            }}
            source={require('../assets/ios/rocket-lunch.png')}
          />
        ),
        tabBarActiveTintColor: '#FFF',
        tabBarActiveBackgroundColor: '#FB5B5A'
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        tabBarIcon: ({ }) => (
          <Icon name="mobile-phone" size={30} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ }) => (
          <Icon name="mobile-phone" size={30} />
        )
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({ }) => (
          <Icon name="gear" size={30} />
        )
      }} />
    </Tab.Navigator>)
}




export default BottomTabNavigator