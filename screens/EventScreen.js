import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import SafeView from '../components/SafeView'

import { AntDesign } from '@expo/vector-icons'

export default function EventScreen() {
  return (
    <SafeView>
      <View>
        <Text>
          {'EventScreen'}
        </Text>
      </View>

      <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#87CEEB', position: 'absolute', bottom: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </SafeView>
  )
}