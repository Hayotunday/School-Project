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
    </SafeView>
  )
}