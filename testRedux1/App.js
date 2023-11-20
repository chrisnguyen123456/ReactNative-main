import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

//Định nghĩa actions type
 const ADD = 'ADD';
 const SUBTRACT = 'SUBTRACT';
 const MULTIPLY = 'MULTIPLY'; 
 const DIVIDE = 'DIVIDE';

 //Hàm action creator, trả về một action dựa trên loại phép toán được chỉ định
 const performOperation = (num1, num2, operation) => {
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

//initial State
const initialState = {
  result: 0,
};

//Reducer xử lý các action liên quan đến phép toán cộng, trừ, nhân, chia và cập nhật trạng thái của ứng dụng.
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

export default function App({ result }) {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <Button title="Add" onPress={() => performOperation(num1, num2, 'ADD')} />
      <Button title="Subtract" onPress={() => performOperation(num1, num2, 'SUBTRACT')} />
      <Button title="Multiply" onPress={() => performOperation(num1, num2, 'MULTIPLY')} />
      <Button title="Divide" onPress={() => performOperation(num1, num2, 'DIVIDE')} />
      <Text>Result: {result}</Text>
    </View>
  );
}


