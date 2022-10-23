import { View, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function SafeView(props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})