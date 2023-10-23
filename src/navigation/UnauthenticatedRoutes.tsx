import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Test from '../screens/Test'


const RootStack = createNativeStackNavigator()

const UnauthenticatedRoutes = () => {
  return (
    <RootStack.Navigator initialRouteName='test'
      screenOptions={{
        headerShown: false
      }}>
      <RootStack.Screen name="test" component={Test} />
    </RootStack.Navigator >
  )
}

export default UnauthenticatedRoutes
