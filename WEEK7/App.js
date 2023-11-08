import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/HomeScreen';
import ShopNear from './src/ShopNear';
import Drinks from './src/Drinks';
import Orders from './src/Orders';
const Stack = createStackNavigator();
export default function App() {
  return (
    // man hinh cafe
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ShopNear" component={ShopNear} options={{headerShown: false}} />
        <Stack.Screen name="Drinks" component={Drinks} options={{headerShown: false}}/>
        <Stack.Screen name="Orders" component={Orders} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}