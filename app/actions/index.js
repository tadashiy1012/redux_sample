import { actionTypes } from '../constants.js';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text: text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter: filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id: id
  };
};

