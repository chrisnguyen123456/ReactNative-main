import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image, TextInput, View, Text } from "react-native";

import Screen2 from "./Screen2";

const Stack = createStackNavigator();
const option = {
  headerStyle: {
    backgroundColor: "#1BA9FF",
  },
  headerTitle: "",
  headerRight: () => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={{height:30,width:50}}>
        <Image
          style={{
            resizeMode: "contain",
            height: 26,
            width: 26,
            marginRight: 40,
          }}
          source={require("../assets/bi_cart-check.png")}
        />
      </TouchableOpacity>
      ,
      <TouchableOpacity style={{}}>
        <Image
        style={{
          resizeMode: "contain",
          height: 26,
          width: 20,
          marginRight:20,
        }}
    source={require("../assets/dot.png")}
        />
      </TouchableOpacity>
    </View>
  ),
  headerLeft: () => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          style={{
            resizeMode: "contain",
            height: 26,
            width: 26,
            marginLeft: 18,
          }}
          source={require("../assets/ant-design_arrow-left-outlined.png")}
        />
      </TouchableOpacity>
      ,
      <TextInput
        style={{
          height: 30,
          width: 200,
          backgroundColor: "white",
          marginLeft: 20,
        }}
        placeholder="Search"
      />
    </View>
  ),
};

const StackNavigaton = () => {
  return (
    <Stack.Navigator screenOptions={option}>
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};
export { StackNavigaton };
