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
  const addEvent = (CourseCode, courseTitle, value) => {
    if (CourseCode === null || courseTitle === null || value === null) {
      Alert.alert('', 'Please Enter all fields', [{ text: '' }], { cancelable: true });
    } else {
      Keyboard.dismiss();
      const event = { day: value, code: CourseCode, title: courseTitle };
      dispatch({ type: ADD_EVENT, payload: event })
      console.log(state)
    }
  }

  // Delete Event
  const deleteEvent = (index) => {
    let eventsCopy = [...state.eventItems];
    eventsCopy.splice(index, 1);
    dispatch({ type: DELETE_TASK, payload: eventsCopy })
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
      closeModal
    }}
  >
    {props.children}
  </AppContext.Provider>
}

export default AppState;