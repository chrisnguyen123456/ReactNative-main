import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import index from "./index";
import Home2 from "./Home2";
import Home1 from "./Home1";
import Login from "./Login";
import Login2 from "./Login2";
import Login3 from "./Login3";
import ForgotPassword from "./ForgotPassword";
import Code from "./Code";
import Register from "./Register";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang chủ" component={index}/>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login2" component={Login2} />
      <Stack.Screen name="Login3" component={Login3} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
