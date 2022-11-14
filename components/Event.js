import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/app/appContext'

import { MaterialIcons } from '@expo/vector-icons'


export default function Event({ data }) {
  const appContext = useContext(AppContext)

  const { deleteEvent } = appContext

  return (
    <View style={{
      borderRadius: 20, height: 180, width: 155, backgroundColor: '#87CEEB', padding: 15, justifyContent: 'space-evenly',
    }}>
      <Text style={{
        color: '#333',
        fontSize: 20,
        fontWeight: "500",
      }}>{data.day}</Text>
      <Text style={{
        color: '#333',
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",
      }}>{data.code}</Text>
      <Text style={{ fontSize: 15, color: '#333', }} numberOfLines={4} ellipsizeMode={"tail"}>
        {data.title}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        {/* <Text style={{
          color: '#333',
          fontSize: 20,
          fontWeight: "700",
        }}>
          {time}
        </Text> */}
        <TouchableOpacity onPress={() => { deleteEvent() }}>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}