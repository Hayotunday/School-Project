import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import SafeView from '../components/SafeView'
import AppContext from '../context/app/appContext'
import { Dropdown } from 'react-native-element-dropdown';

import TimePicker from '../components/TimePicker'

const data = [
  { label: 'Sunday', value: 'Sunday' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
];

export default function NewEventScreen() {
  const appContext = useContext(AppContext);

  const { addEvent } = appContext;

  const [value, setValue] = useState(null);
  const [title, setTitle] = useState()
  const [code, setCode] = useState()

  return (
    <SafeView style={{ paddingHorizontal: 15 }}>
      {/* , justifyContent: 'flex-end' */}

      <View style={{}}>
        <View style={{ marginBottom: 20 }}>

          <TimePicker />
        </View>

        <View style={{}}>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#87CEEB', padding: 8, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { }}>
            <Text style={{ fontSize: 15 }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#87CEEB', padding: 8, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { }}>
            <Text style={{ fontSize: 15 }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#87CEEB', padding: 8, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { addEvent(code, title, value) }}>
            <Text style={{ fontSize: 15 }}>Add</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={{ borderColor: '#87CEEB', borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}
          placeholder='Enter cousre title'
          value={title}
          onChangeText={(title) => { setTitle(title) }}
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
            setValue(item.value);
          }}
          placeholder='Select day'
          value={value}
          containerStyle={{
            borderRadius: 10
          }}
          dropdownPosition={'bottom'}
          showsVerticalScrollIndicator={false}
          itemContainerStyle={{
            height: 50,
            borderRadius: 10
          }}
        />
      </View>
    </SafeView>
  )
}