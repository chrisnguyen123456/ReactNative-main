import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./src/Stack";
import ForgotPassword from "./src/ForgotPassword";
import Code from "./src/Code";
import Login from "./src/Login";
import  Register from "./src/Register";
import Login2 from "./src/Login2";
import Login3 from "./src/Login3";

export default function App() {
  return (

    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <Login3/>
  );
}

