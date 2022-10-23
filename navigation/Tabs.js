import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import TaskScreen from '../screens/TaskScreen';
import EventScreen from '../screens/EventScreen';

import { FontAwesome } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Tabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Task' component={TaskScreen} options={{}} />
      <Stack.Screen name='Event' component={EventScreen} options={{}} />
    </Stack.Navigator>
  )
}
