import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigation } from './src/StackNavigation';
const Stack = createStackNavigator();
export default function App() {
  return (
    // man hinh Job
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>



  );
}

