import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useContext } from 'react'
import SafeView from '../components/SafeView'
import AppContext from '../context/app/appContext'
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import TimePicker from '../components/TimePicker';

// import TimePicker from '../components/TimePicker'

const data = [
  { label: 'Sunday', value: 'Sunday' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
];

export default function NewEventScreen({ navigation }) {
  const appContext = useContext(AppContext);
  const { addEvent, formatTime } = appContext;

  const [day, setDay] = useState(null);
  const [title, setTitle] = useState(null)
  const [code, setCode] = useState(null)
  const [time, setTime] = useState(new Date(Date.now()));
  const [timePicker, setTimePicker] = useState(false)

  const showTimePicker = () => {
    setTimePicker(true);
  };

  const onTimeSelected = (event, value) => {
    setTime(value);
    setTimePicker(false);
  };

  const clearAll = () => {
    setCode(null)
    setDay(null)
    setTime(new Date(Date.now()))
    setTitle(null)
  }


  return (
    <SafeView style={{ paddingHorizontal: 15 }}>
      {/* , justifyContent: 'flex-end' */}
      <View style={{}}>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            style={{ borderColor: '#87CEEB', borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}
            placeholder='Enter cousre title'
            value={title}
            onChangeText={(title) => { setTitle(title) }}
            autoCapitalize={'words'}
          />
          <TextInput
            style={{ marginTop: 10, borderColor: '#87CEEB', borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}
            placeholder='Enter course code'
            value={code}
            onChangeText={(code) => { setCode(code) }}
          />
          <Dropdown
            style={{
              marginVertical: 10,
              borderColor: '#87CEEB',
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 2,
              paddingHorizontal: 10
            }}
            data={data}
            labelField="label"
            valueField="value"
            onChange={item => {
              setDay(item.value);
            }}
            placeholder='Select day'
            value={day}
            containerStyle={{
              borderRadius: 10
            }}
            dropdownPosition={'bottom'}
            showsVerticalScrollIndicator={true}
            itemContainerStyle={{
              height: 55,
              borderRadius: 10
            }}
          />
          <TimePicker time={time} showTimePicker={showTimePicker} />
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#87CEEB',
              padding: 8,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
            }}
            onPress={() => { clearAll() }}
          >
            <Text style={{ fontSize: 15, fontWeight: '800' }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#87CEEB',
              height: 45,
              padding: 8,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              clearAll(); navigation.goBack()
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '800' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#87CEEB',
              height: 45,
              padding: 8,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              addEvent(title, code, day, time, clearAll, navigation)
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '800' }}>Add</Text>
          </TouchableOpacity>
        </View>


        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            is24Hour={false}
            onChange={onTimeSelected}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          />
        )}

      </View>
    </SafeView>
  )
}