import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import TaskScreen from '../screens/TaskScreen';
import EventScreen from '../screens/EventScreen';
import NewTaskScreen from '../screens/NewTaskScreen';
import NewEventScreen from '../screens/NewEventScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={'Home'}>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Task' component={TaskScreen} options={{
        headerTitleStyle: {
          fontWeight: '900'
        },
        headerRight: () => (
          <TouchableOpacity style={{ backgroundColor: '#87CEEB', padding: 10, borderRadius: 10 }} onPress={() => { navigation.navigate('NewTask') }}>
            <Text>Add New Task</Text>
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name='Event' component={EventScreen} options={{
        headerTitleStyle: {
          fontWeight: '900'
        },
        headerRight: () => (
          <TouchableOpacity style={{ backgroundColor: '#87CEEB', padding: 10, borderRadius: 10 }} onPress={() => { navigation.navigate('NewEvent') }}>
            <Text>Add New Event</Text>
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name='NewTask' component={NewTaskScreen} options={{
        headerTitle: 'Add New Task',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '900'
        }
      }} />
      <Stack.Screen name='NewEvent' component={NewEventScreen} options={{
        headerTitle: 'Add New Event',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '900'
        }
      }} />
    </Stack.Navigator>
  )
}
