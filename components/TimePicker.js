import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/app/appContext';

export default function TimePicker({ time, showTimePicker }) {
  const appContext = useContext(AppContext);
  const { formatTime } = appContext

  return (
    <View style={{ flexDirection: 'row', height: 42, justifyContent: 'space-between' }}>
      <View style={{
        borderColor: '#87CEEB', width: '70%', borderWidth: 2, borderRadius: 5, justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10
      }}>
        <Text>{formatTime(time)}</Text>
      </View>
      <TouchableOpacity onPress={showTimePicker} style={{
        backgroundColor: '#87CEEB', width: '25%', padding: 5, borderRadius: 8, alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10
      }}>
        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Set Time</Text>
      </TouchableOpacity>
    </View>
  )
}