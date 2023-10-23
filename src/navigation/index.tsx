import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import UnauthenticatedRoutes from './UnauthenticatedRoutes'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <UnauthenticatedRoutes />
    </NavigationContainer>
  )
}

export default RootNavigator