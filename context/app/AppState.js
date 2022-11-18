import React, { useReducer } from 'react';
import { Alert, Keyboard } from 'react-native'
import AppContext from './appContext';
import AppReducer from './appReducer';
import {
  ADD_EVENT,
  ADD_TASK,
  DELETE_EVENT,
  DELETE_TASK,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../types';

const AppState = props => {
  const initialState = {
    taskItems: [],
    eventItems: [],
    modalVisible: false
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //  Add Task
  const addTask = (task, setTask, navigation) => {
    if (task === '') {
      Alert.alert('', 'Please Enter a task', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      dispatch({ type: ADD_TASK, payload: task })
      setTask(task)
      navigation.goBack()
      console.log(state)
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
      console.log(state)
    }
  }

  // Delete Event
  const deleteEvent = (index) => {
    let eventsCopy = [...state.eventItems];
    eventsCopy.splice(index, 1);
    dispatch({ type: DELETE_EVENT, payload: eventsCopy })
    console.log(state)
  }

  // Open Modal
  const openModal = () => {
    dispatch({ type: OPEN_MODAL, payload: true }); console.log(state)
  }

  // Open Modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL, payload: false }); console.log(state)
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

  return <AppContext.Provider
    value={{
      taskItems: state.taskItems,
      eventItems: state.eventItems,
      modalVisible: state.modalVisible,
      addTask,
      deleteTask,
      addEvent,
      deleteEvent,
      openModal,
      closeModal,
      formatTime
    }}
  >
    {props.children}
  </AppContext.Provider>
}

export default AppState;