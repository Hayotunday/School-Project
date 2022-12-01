import { View, Text } from 'react-native'
import React from 'react'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import OnboardingScreen from '../screens/OnboardingScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={'Login'}>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}