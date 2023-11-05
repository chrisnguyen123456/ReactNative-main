import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity,Image } from "react-native";

import Screen1 from "./Screen1";

const Stack = createStackNavigator();
const option = {
  headerStyle: {
    backgroundColor: "#1BA9FF",
  },
  headerTintColor: "#fff",
  title: "Chat",
  headerTitleStyle: {
    fontSize: 20,
  },
  headerTitleAlign: "center",
  headerRight: () => <TouchableOpacity>
    <Image style={{resizeMode:"contain",height:30,width:30,marginRight:10}} source={require("../assets/bi_cart-check.png")} />
  </TouchableOpacity>,
  headerLeft: () => <TouchableOpacity>
  <Image style={{resizeMode:"contain",height:30,width:30,marginLeft:10}} source={require("../assets/ant-design_arrow-left-outlined.png")} />
</TouchableOpacity>,
};

 const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={option}>
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  );
}
export { MainStackNavigator };
