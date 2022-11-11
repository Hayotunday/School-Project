import { View, Text } from 'react-native'
import React from 'react'

import HomeStack from './HomeStack'
import NoteScreen from '../screens/NoteScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name='Note' component={NoteScreen} />
    </Tab.Navigator>
  )
}