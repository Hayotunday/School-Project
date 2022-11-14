import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/app/appContext'

import SafeView from '../components/SafeView';
import Task from '../components/Task'
import { AntDesign } from '@expo/vector-icons';

export default function TaskScreen() {
  const appContext = useContext(AppContext);

  const { taskItems } = appContext
  return (
    <SafeView style={{}}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
        {
          taskItems.map((task, index) => {
            return (
              <Task text={task} style={{ marginBottom: 15 }} key={index} index={index} />
            )
          })
        }
      </ScrollView>
    </SafeView>
  )
}