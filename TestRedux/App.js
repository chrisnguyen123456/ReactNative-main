// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calculatorReducer from './scr/reducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './scr/CalculatorScreen';

const store = createStore(calculatorReducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={CalculatorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const App = () => {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [result, setResult] = useState('');

//   const handleAddition = () => {
//     const sum = parseFloat(number1) + parseFloat(number2);
//     setResult(sum.toString());
//   };

//   const handleSubtraction = () => {
//     const difference = parseFloat(number1) - parseFloat(number2);
//     setResult(difference.toString());
//   };

//   const handleMultiplication = () => {
//     const product = parseFloat(number1) * parseFloat(number2);
//     setResult(product.toString());
//   };

//   const handleDivision = () => {
//     const quotient = parseFloat(number1) / parseFloat(number2);
//     setResult(quotient.toString());
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         placeholder="Nhập số thứ nhất"
//         onChangeText={text => setNumber1(text)}
//         value={number1}
//       />
//       <TextInput
//         style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         placeholder="Nhập số thứ hai"
//         onChangeText={text => setNumber2(text)}
//         value={number2}
//       />
//       <View style={{ flexDirection: 'row', marginBottom: 10 }}>
//         <Button title="Cộng" onPress={handleAddition} />
//         <Button title="Trừ" onPress={handleSubtraction} />
//         <Button title="Nhân" onPress={handleMultiplication} />
//         <Button title="Chia" onPress={handleDivision} />
//       </View>
//       <Text style={{ fontSize: 20 }}>{result}</Text>
//     </View>
//   );
// };

// export default App;

