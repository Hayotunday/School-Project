import { View, Text } from 'react-native'
import React from 'react'

import HomeStack from './HomeStack'
import NoteStack from '../screens/NoteScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name='NoteStack' component={NoteStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}