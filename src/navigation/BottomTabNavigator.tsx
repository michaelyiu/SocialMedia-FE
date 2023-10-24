import { DrawerActions } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "../screens/Dashboard"
import Settings from "../screens/Settings"

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>)
}




export default BottomTabNavigator