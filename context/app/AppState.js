import React, { useReducer, useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native'
import AppContext from './appContext';
import AppReducer from './appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import {
  ADD_EVENT,
  ADD_TASK,
  DELETE_EVENT,
  DELETE_TASK,
  OPEN_MODAL,
  CLOSE_MODAL,
  REGISTER_USER,
  UPDATE,
  LOGIN,
  LOGOUT
} from '../types';

const AppState = props => {
  const initialState = {
    email: '',
    username: '',
    password: '',
    taskItems: [],
    eventItems: [],
    modalVisible: false
  }

  const [isLoading, setIsLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)

  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    isLoggedIn()
  }, [])

  useEffect(() => {
    setItem(state)
    console.log(state)
  }, [state])


  //  Add Task
  const addTask = (task, setTask, navigation) => {
    if (task === '') {
      Alert.alert('', 'Please Enter a task', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      dispatch({ type: ADD_TASK, payload: task })
      setTask(task)
      navigation.goBack()
    }
  };

  // Delete Task
  const deleteTask = (index) => {
    let tasksCopy = [...state.taskItems];
    tasksCopy.splice(index, 1);
    dispatch({ type: DELETE_TASK, payload: tasksCopy })
  };

  // Add Event
  const addEvent = (courseTitle, CourseCode, courseDay, courseTime, clearAll, navigation) => {
    if (courseTitle === null) {
      Alert.alert('', 'Please Enter Course title', [{ text: '' }], { cancelable: true });
    } else if (CourseCode === null) {
      Alert.alert('', 'Please Enter Course code', [{ text: '' }], { cancelable: true });
    } else if (courseDay === null) {
      Alert.alert('', 'Please select day', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      let actualTime = formatTime(courseTime)
      const event = { day: courseDay, code: CourseCode, title: courseTitle, time: actualTime };
      dispatch({ type: ADD_EVENT, payload: event })
      clearAll()
      navigation.goBack()
    }
  }

  // Delete Event
  const deleteEvent = (index) => {
    let eventsCopy = [...state.eventItems];
    eventsCopy.splice(index, 1);
    dispatch({ type: DELETE_EVENT, payload: eventsCopy })
  }

  // Open Modal
  const openModal = () => {
    dispatch({ type: OPEN_MODAL, payload: true });
  }

  // Open Modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL, payload: false });
  }

  // Format time
  const formatTime = (time) => {
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  // Register new user
  const register = async (mail, user, pass, cpass, clearAll) => {
    if (mail === null || mail === '') {
      Alert.alert('', 'Please Enter an e-mail', [{ text: '' }], { cancelable: true });
    } else if (user === null || user === '') {
      Alert.alert('', 'Please Enter user name', [{ text: '' }], { cancelable: true });
    } else if (pass === null) {
      Alert.alert('', 'Please enter password', [{ text: '' }], { cancelable: true });
    } else if (cpass === null) {
      Alert.alert('', 'Please confirm password', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      if (pass !== cpass) {
        Alert.alert('', 'Confirm password not correct', [{ text: '' }], { cancelable: true });
      } else {
        const details = {
          email: mail,
          username: user,
          password: pass
        }
        dispatch({ type: REGISTER_USER, payload: details })
        setIsLoading(true)
        setUserToken(user)
        await AsyncStorage.setItem('userToken', user)
        setIsLoading(false)
        clearAll()
      }
    }
  }

  // Login
  const login = async (user, pass, clearAll) => {
    let result = getItem()

    if (result == null) {
      Alert.alert('', 'Please register. No registered user available for login', [{ text: '' }], { cancelable: true });
    } else if (result.username === user && result.password === pass) {
      setIsLoading(true)
      setUserToken(state.username)
      await AsyncStorage.setItem('userToken', userToken)
      setIsLoading(false)
      clearAll()
    } else {
      Alert.alert('', 'Incorrect Username or Password', [{ text: '' }], { cancelable: true });
    }
  }

  // Logout
  const logout = () => {
    setIsLoading(true)
    setUserToken(state.username)
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true)
      let token = await AsyncStorage.getItem('userToken')
      setUserToken(token)
      setIsLoading(false)

      let result = getItem()
      if (result != null) {
        dispatch({ type: UPDATE, payload: update })
      }
    } catch (e) {
      console.log('is logged in error ' + e)
    }
  }

  // setItem
  const setItem = async (obj) => {
    try {
      const jsonValue = JSON.stringify(obj)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
      // save error
      console.log(e)
    }
  }

  // getItem
  const getItem = async () => {
    try {
      const result = await AsyncStorage.getItem('user')
      let update
      if (result != null) {
        update = JSON.parse(result)
        return update
        // dispatch({ type: UPDATE, payload: update })
      }
    } catch (e) {
      // read error
      console.log(e)
    }
  }

  return <AppContext.Provider
    value={{
      email: state.email,
      username: state.username,
      password: state.password,
      taskItems: state.taskItems,
      eventItems: state.eventItems,
      modalVisible: state.modalVisible,
      isLoading,
      userToken,
      addTask,
      deleteTask,
      addEvent,
      deleteEvent,
      openModal,
      closeModal,
      formatTime,
      register,
      login,
      logout
    }}
  >
    {props.children}
  </AppContext.Provider>
}

export default AppState;