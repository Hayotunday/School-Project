import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import SafeView from '../components/SafeView'
import AppContext from '../context/app/appContext'

export default function NewTaskScreen() {
  const appContext = useContext(AppContext);

  const { } = appContext

  return (
    <SafeView>
      <View>
        <Text>NewTaskScreen</Text>
      </View>
    </SafeView>
  )
}