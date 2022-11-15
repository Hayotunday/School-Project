import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import AppContext from '../context/app/appContext';

export default function TimePicker({ time, setTime }) {
  const appContext = useContext(AppContext);

  const { formatTime } = appContext

  const onChange = (selectedTime) => {
    setTime(formatTime(selectedTime));
  };

  const showTimePicker = (time) => {
    DateTimePickerAndroid.open({
      value: time,
      onChange,
      mode: 'time',
      is24Hour: false,
      display: 'default',
    });
  };

  return (
    <View style={{ flexDirection: 'row', height: 42, justifyContent: 'space-between' }}>
      <View style={{
        borderColor: '#87CEEB', width: '70%', borderWidth: 2, borderRadius: 5, justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10
      }}>
        {/* <Text>{time.getHours().toLocaleString()} : {time.getMinutes().toLocaleString()}</Text> */}
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