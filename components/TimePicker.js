import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function TimePicker() {
  const [time, setTime] = useState(new Date());

  const onChange = (selectedTime) => {
    const currentTime = selectedTime;
    setTime(currentTime);
  };

  function format(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  let actualTime = format(time)

  const showTimePicker = () => {
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
        <Text>{actualTime}</Text>
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