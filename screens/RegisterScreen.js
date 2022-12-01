import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import SafeView from '../components/SafeView'
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import AppContext from '../context/app/appContext';

const RegisterScreen = ({ navigation }) => {
  const appContext = useContext(AppContext)
  const { register } = appContext

  const [email, setEmail] = useState(null)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [cpassword, setCPassword] = useState(null)
  const [checked, setChecked] = useState(false)

  const clearAll = () => {
    setEmail(null)
    setUsername(null)
    setPassword(null)
    setCPassword(null)
    setChecked(false)
  }

  return (
    <SafeView style={{ margin: 30 }}>

      <TouchableOpacity onPress={() => { navigation.goBack(); clearAll() }}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', marginTop: 50 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '900', }}>Register</Text>
        </View>

        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <View style={{}}>
            <TextInput
              style={{
                borderColor: '#87CEEB',
                borderWidth: 2,
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 10,
                height: 45,
                padding: 12,
                marginTop: 20,
                fontSize: 15,
                textTransform: 'lowercase'
              }}
              placeholder='Email'
              placeholderTextColor={'#666'}
              keyboardType={'email-address'}
              returnKeyType='next'
              value={email}
              onChangeText={(email) => { setEmail(email) }}
            />

            <TextInput style={{
              borderColor: '#87CEEB',
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 20,
              height: 45,
              padding: 12,
              fontSize: 15
            }}
              placeholder='Username'
              placeholderTextColor={'#666'}
              returnKeyType='next'
              value={username}
              onChangeText={(username) => { setUsername(username) }}
            />

            <TextInput style={{
              borderColor: '#87CEEB',
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 20,
              height: 45,
              padding: 12,
              fontSize: 15
            }}
              placeholder='Password'
              placeholderTextColor={'#666'}
              secureTextEntry={!checked}
              returnKeyType='next'
              value={password}
              onChangeText={(password) => { setPassword(password) }}
            />
            <TextInput style={{
              borderColor: '#87CEEB',
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginTop: 20,
              height: 45,
              padding: 12,
              fontSize: 15
            }}
              placeholder='Confirm Password'
              placeholderTextColor={'#666'}
              secureTextEntry={!checked}
              value={cpassword}
              onChangeText={(cpassword) => { setCPassword(cpassword) }}
            />
          </View>

          <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginVertical: 20 }}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={checked}
              onValueChange={setChecked}
              color={checked ? '#87CEEB' : undefined}
            />
            <Text style={{}}>Show password</Text>
          </View>

          <TouchableOpacity style={{
            height: 50,
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#87CEEB',
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20
          }}
            onPress={() => { register(email, username, password, cpassword, clearAll) }}
          >
            <Text style={{ fontSize: 15, fontWeight: '800' }}>Sign up</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>

    </SafeView>
  )
}

export default RegisterScreen