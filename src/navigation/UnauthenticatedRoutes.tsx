import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup'
import { Image } from 'react-native'


const RootStack = createNativeStackNavigator()

const UnauthenticatedRoutes = () => {
  return (
    <RootStack.Navigator initialRouteName='signup'

      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="signup" component={Signup} />
    </RootStack.Navigator >
  )
}

export default UnauthenticatedRoutes
