// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './scr/store';
import YourComponent from './scr/YourComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="YourComponent" component={YourComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
