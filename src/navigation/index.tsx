import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import UnauthenticatedRoutes from './UnauthenticatedRoutes'
import AsyncStorage from "@react-native-async-storage/async-storage"
import AuthenticatedRoutes from './AuthenticatedRoutes'
import BottomTabNavigator from './BottomTabNavigator'
const RootNavigator = () => {
  const token = AsyncStorage.getItem('token')
  return (
    <NavigationContainer>
      {
        token !== null ?
          (<BottomTabNavigator />) :
          (<UnauthenticatedRoutes />)
      }
    </NavigationContainer>
  )
}

export default RootNavigator