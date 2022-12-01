import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import SafeView from '../components/SafeView'
import Checkbox from 'expo-checkbox';
import AppContext from '../context/app/appContext'

const LoginScreen = ({ navigation }) => {
  const appContext = useContext(AppContext)
  const { login } = appContext

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [checked, setChecked] = useState(false)

  const clearAll = () => {
    setUsername(null)
    setPassword(null)
    setChecked(false)
  }

  return (
    <SafeView style={{ margin: 30, justifyContent: 'center' }}>
      <View style={{ justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '900', }}>Login</Text>
        </View>

        <View style={{ marginTop: 30 }}>
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
            value={password}
            onChangeText={(password) => { setPassword(password) }}
          />

          <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginVertical: 20 }}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={checked}
              onValueChange={setChecked}
              color={checked ? '#87CEEB' : undefined}
            />
            <Text style={{}}>Show password</Text>
          </View>

          <TouchableOpacity onPress={() => { login(username, password, clearAll) }}
            style={{
              height: 45,
              padding: 12,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#87CEEB',
              borderRadius: 10,
              marginTop: 5
            }}>
            <Text style={{ fontSize: 15, fontWeight: '800' }}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <Text style={{ fontSize: 15 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Register'); clearAll() }}>
            <Text style={{ color: '#87CEEB', fontSize: 15 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeView>
  )
}

export default LoginScreen