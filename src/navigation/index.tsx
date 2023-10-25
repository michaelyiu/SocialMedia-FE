import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import UnauthenticatedRoutes from './UnauthenticatedRoutes'
import AsyncStorage from "@react-native-async-storage/async-storage"
import AuthenticatedRoutes from './AuthenticatedRoutes'
import BottomTabNavigator from './BottomTabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import CreateProfile from '../screens/CreateProfile'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const RootNavigator = () => {
  const token = AsyncStorage.getItem('token')
  const RootStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#FB5B5A' },
          headerTintColor: 'white',
          headerBackTitleStyle: { fontSize: 2 },
          headerBackTitleVisible: false,
          // headerRight: () => <Icon name='three-bars' size={30} color='#000' onPress={() => navigation.navigate('HeaderDrawer')} />,
          headerTitle: () => (
            <Image
              resizeMode='center'
              style={{
                width: 20, height: 20, backgroundColor: '#FB5B5A'
              }}
              source={require('../assets/ios/rocket-lunch.png')}
            />
          ),
        }}
      >
        {
          token !== null ?
            (
              <>
                <RootStack.Screen name="tabnav" component={BottomTabNavigator} options={{ headerShown: false }} />
                <RootStack.Screen name="profile" component={Profile} options={{ headerShown: true }} />
                <RootStack.Screen name="create-profile" component={CreateProfile} options={{ headerShown: true }} />
              </>

            ) :
            (
              <>
                <RootStack.Screen name="postsplash" component={UnauthenticatedRoutes} />
              </>
            )
        }
      </RootStack.Navigator>
    </NavigationContainer >
  )
}

export default RootNavigator