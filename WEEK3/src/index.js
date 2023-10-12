import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const index = ({ navigation }) => {
  return (
    <View style={styles.btn}>
      <Button title="Home 1 Screen" 
      onPress={ () => navigation.navigate("Home1")}/>
      <Button
        title="Home2 Screen"
        onPress={() => navigation.navigate("Home2")}
      />
      <Button title="Login1" 
      onPress={() =>navigation.navigate("Login")}/>
      <Button title="Login2" onPress={() =>navigation.navigate("Login2")}/>
      <Button title="Login3" onPress={() =>navigation.navigate("Login3")}/>
      <Button title="Forgot Password Screen" onPress={() =>navigation.navigate("ForgotPassword")}/>
      <Button title="Code Screen" onPress={() =>navigation.navigate("Code")}/>
      <Button title="Register Screen" onPress={() =>navigation.navigate("Register")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
  },
});

export default index;
