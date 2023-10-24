import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostSplash from '../screens/PostSplash'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

const RootStack = createNativeStackNavigator()

const UnauthenticatedRoutes = () => {
  return (

    <RootStack.Navigator>
      <RootStack.Screen name="postsplash" component={PostSplash} />
      <RootStack.Screen name="signup" component={Signup} options={{ headerShown: true }} />
      <RootStack.Screen name="login" component={Login} options={{ headerShown: true }} />
    </RootStack.Navigator>
  )
}

export default UnauthenticatedRoutes
