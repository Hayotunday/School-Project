import { View, Text } from 'react-native'
import React from 'react'

import HomeStack from './HomeStack'
import NoteStack from './NoteStack'
import ProfileScreen from '../screens/ProfileScreen'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
          headerShown: false

        })} />
      {/* <Tab.Screen name='NoteStack' component={NoteStack} options={{ headerShown: false }} /> */}
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const getTabBarVisibility = (route) => {
  // console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
  // console.log(routeName)

  switch (routeName) {
    case 'Home':
      return 'flex';
    default:
      return 'none';
  }
}