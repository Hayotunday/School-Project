import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function TimePicker() {
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime;
    setTime(currentTime);
    // console.log(currentTime)
  };

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      onChange,
      mode: 'time',
      is24Hour: false,
      display: 'default',
    });
  };

  function format(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log(strTime)
    return strTime;
  }

  return (
    <View style={{ borderColor: '#87CEEB', borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, height: 42, justifyContent: 'center' }}>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        {/* <Text>{time.getHours().toLocaleString()} : {time.getMinutes().toLocaleString()}</Text> */}
        <Text>{format(time)}</Text>
        <TouchableOpacity onPress={showTimePicker} style={{ backgroundColor: '#87CEEB', padding: 5, borderRadius: 8, alignItems: 'center' }}>
          <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Set Time</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}