// src/CalculatorScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { performOperation } from './action';

const CalculatorScreen = ({ result, performOperation }) => {
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
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    performOperation: (num1, num2, operation) =>
      dispatch(performOperation(num1, num2, operation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);
