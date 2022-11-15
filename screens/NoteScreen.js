import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react';
import AppContext from '../context/app/appContext';

import SafeView from '../components/SafeView'

import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function NoteScreen() {
  const appContext = useContext(AppContext);

  const { } = AppContext

  return (
    <SafeView style={{ paddingHorizontal: 15, backgroundColor: '#000' }}>

      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', marginVertical: 15 }}>
        <View style={{ flexDirection: 'row', borderRadius: 15, width: '100%', paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center', backgroundColor: '#87CEEB', marginRight: 10 }}>
          <Ionicons name="search-outline" size={20} color='#333' style={{ marginRight: 5 }} />
          <TextInput placeholder='Search' placeholderTextColor='#333' onChangeText={() => { }} />
        </View>
      </View>


      {/* Add new button */}
      <TouchableOpacity
        onPress={() => { }}
        style={{
          width: 50,
          height: 50,
          // borderWidth: 2,
          // borderColor: '#fff',
          borderRadius: 25,
          backgroundColor: '#87CEEB',
          position: 'absolute',
          bottom: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>

    </SafeView>
  )
}