import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/app/appContext'

import SafeView from '../components/SafeView';
import Task from '../components/Task'
import { AntDesign } from '@expo/vector-icons';

export default function TaskScreen() {
  const appContext = useContext(AppContext);

  const { taskItems } = appContext
  return (
    <SafeView>
      <View>
        {
          taskItems.map((task, index) => {
            return (
              <Task text={task} style={{ marginVertical: 10 }} key={index} index={index} />
            )
          })
        }
      </View>
    </SafeView>
  )
}