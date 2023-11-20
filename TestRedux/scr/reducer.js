// src/reducers.js
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';

const initialState = {
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
    case SUBTRACT:
    case MULTIPLY:
    case DIVIDE:
      return { ...state, result: action.result };
    default:
      return state;
  }
};

export default calculatorReducer;
