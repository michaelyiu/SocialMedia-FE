import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostSplash from '../screens/PostSplash'
import Signup from '../screens/Signup'
import { Image } from 'react-native'


const RootStack = createNativeStackNavigator()

const UnauthenticatedRoutes = () => {
  return (
    <RootStack.Navigator initialRouteName='postsplash'

      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FB5B5A' },
        headerTintColor: 'white',
        headerBackTitleStyle: { fontSize: 2 },
        headerBackTitleVisible: false,
        headerTitle: () => (
          <Image
            resizeMode='center'
            style={{
              width: 20, height: 20, backgroundColor: '#FB5B5A'
            }}
            source={require('../assets/ios/rocket-lunch.png')}
          />
        ),
      }}>

      <RootStack.Screen name="postsplash" component={PostSplash} />
      <RootStack.Screen name="signup" component={Signup} options={{ headerShown: true }} />
    </RootStack.Navigator >
  )
}

export default UnauthenticatedRoutes
