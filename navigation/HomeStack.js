import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import TaskScreen from '../screens/TaskScreen';
import EventScreen from '../screens/EventScreen';
import NewTaskScreen from '../screens/NewTaskScreen';
import NewEventScreen from '../screens/NewEventScreen';

import { FontAwesome } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Task' component={TaskScreen} options={{}} />
      <Stack.Screen name='Event' component={EventScreen} options={{}} />
      <Stack.Screen name='NewTask' component={NewTaskScreen} options={{}} />
      <Stack.Screen name='NewEvent' component={NewEventScreen} options={{}} />
    </Stack.Navigator>
  )
}
