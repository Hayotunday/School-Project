import {
  ADD_TASK,
  ADD_EVENT,
  DELETE_TASK,
  DELETE_EVENT,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload]
      }
    case DELETE_TASK:
      return {
        ...state,
        taskItems: action.payload
      }
    case ADD_EVENT:
      return {
        ...state,
        eventItems: [...state.eventItems, action.payload]
      }
    case DELETE_EVENT:
      return {
        ...state,
        eventItems: action.payload
      }
    case OPEN_MODAL:
      return {
        ...state,
        modalVisible: action.payload
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisible: action.payload
      }
    default:
      return state
  }
}