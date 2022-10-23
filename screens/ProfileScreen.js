import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import SafeView from '../components/SafeView';
import { Feather, Entypo, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeView style={{ padding: 20 }}>
      <TouchableOpacity style={{ alignItems: 'flex-end' }} >
        <Feather name="edit-3" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
        <ImageBackground source={require('../assets/profile.jpg')} style={{ height: 70, width: 70, marginRight: 20 }} imageStyle={{ borderRadius: 35 }} />
      </View>
      <View>
        <View>
          <Text style={{}}>Idowu Daniel Ayotunde</Text>
        </View>
        <View >
          <Text>08106082352</Text>
        </View>
        <View >
          <Text>Redeemer's College of Technology and Management</Text>
        </View>
        <View >
          <Text>R2020/620/056</Text>
        </View>
        <View style={{}}>
          <Text>idowudanielayotunde@gmail.com</Text>
        </View>
      </View>

      <View style={{}}>
        <TouchableOpacity>
          <Entypo name="share" size={18} color="black" />
          <Text style={{ fontSize: 18 }}>
            Tell Your Friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="logout" size={18} color="black" />
          <Text style={{ fontSize: 18 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  )
}