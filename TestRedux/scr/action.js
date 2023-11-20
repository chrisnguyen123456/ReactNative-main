// src/actions.js
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';

export const performOperation = (num1, num2, operation) => {
  const operand1 = parseFloat(num1);
  const operand2 = parseFloat(num2);
    
  switch (operation) {
    case 'ADD':
      return { type: ADD, result: operand1 + operand2 };
    case 'SUBTRACT':
      return { type: SUBTRACT, result: operand1 - operand2 };
    case 'MULTIPLY':
      return { type: MULTIPLY, result: operand1 * operand2 };
    case 'DIVIDE':
      return { type: DIVIDE, result: operand1 / operand2 };
    default:
      return { type: 'DEFAULT', result: 0 };
  }
};
