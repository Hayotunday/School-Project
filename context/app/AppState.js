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
  const addTask = (task, setTask) => {
    if (task === null) {
      Alert.alert('', 'Please Enter a task', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      dispatch({ type: ADD_TASK, payload: task })
      setTask(task)
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
  const addEvent = (CourseCode, courseTitle, courseDay, actualTime) => {
    if (CourseCode === null || courseTitle === null || courseDay === null) {
      Alert.alert('', 'Please Enter all fields', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      // const event = { day: courseDay, code: CourseCode, title: courseTitle, time: actualTime };
      const event = { day: courseDay, code: CourseCode, title: courseTitle };
      dispatch({ type: ADD_EVENT, payload: event })
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