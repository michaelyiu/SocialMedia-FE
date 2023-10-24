import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../screens/Dashboard'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'


const RootStack = createNativeStackNavigator()
const AuthenticatedRoutes = () => {
  const navigation = useNavigation()
  return (
    <RootStack.Navigator initialRouteName='dashboard'
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FB5B5A' },
        headerTintColor: 'white',
        headerBackTitleStyle: { fontSize: 2 },
        headerBackTitleVisible: false,
        headerRight: () => <Icon name='three-bars' size={30} color='#000' onPress={() => navigation.navigate('HeaderDrawer')} />,
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

      <RootStack.Screen name="dashboard" component={Dashboard} options={{ headerShown: true }} />
    </RootStack.Navigator >
  )
}

export default AuthenticatedRoutes
