import { View, Text } from 'react-native'
import React from 'react'

import NoteScreen from '../screens/NoteScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function NoteStack() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={'Note'}>
      <Stack.Screen name='Note' component={NoteScreen} />
    </Stack.Navigator>
  )
}