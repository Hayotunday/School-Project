import { ActivityIndicator, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/app/appContext';

import AppTab from './AppTab';
import AuthStack from './AuthStack';

import { NavigationContainer } from '@react-navigation/native';

const AppStack = () => {
  const appContext = useContext(AppContext)
  const { isLoading, userToken } = appContext

  if (isLoading) {
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default AppStack