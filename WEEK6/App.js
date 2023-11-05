import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigaton } from './src/StackNavigation';
import { MainStackNavigator } from './src/MainStackNavigator';

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigaton />
    </NavigationContainer>
  );

}








