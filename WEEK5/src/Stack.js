import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "./Product";
import ColorSelection from "./ColorSelection";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Product} />
      <Stack.Screen name="Color" component={ColorSelection} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator };
