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
      closeModalVisible();
      Keyboard.dismiss();
      dispatch({ type: ADD_TASK, payload: task })
      setTask(task)
    }
  };

  // Delete Task
  const deleteTask = (index) => {
    let itemsCopy = [...state.taskItems];
    itemsCopy.splice(index, 1);
    dispatch({ type: DELETE_TASK, payload: itemsCopy })
  };

  // Add Event

  // Delete Event

  // Open Modal
  const openModal = () => dispatch({ type: OPEN_MODAL });

  // Open Modal
  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  return <AppContext.Provider
    value={{
      taskItems: state.taskItems,
      eventItems: state.eventItems,
      modalVisible: state.modalVisible,
      addTask,
      deleteTask,
      openModal,
      closeModal
    }}
  >
    {props.children}
  </AppContext.Provider>
}

export default AppState;