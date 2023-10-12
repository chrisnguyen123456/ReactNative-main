import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
export default function Login() {
  return (
    <LinearGradient
      colors={["#FBCB00", "#BF9A00"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.text1}>LOGIN</Text>
        </View>
        <View style={styles.row2}>
          <View style={styles.name}>
            <Image
              style={styles.imgEmail}
              source={require("../assets/user.png")}
            />
            <TextInput style={styles.input} placeholder="Name" />
          </View>
          <View style={styles.password}>
            <Image
              style={styles.imgEmail}
              source={require("../assets/lock.png")}
            />
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              secureTextEntry //ẩn password
            />
            <Image
              style={styles.imgEye}
              source={require("../assets/eye.png")}
            />
          </View>
        </View>
        <View style={styles.row3}>
          <Pressable style={styles.btn}>
            <Text style={styles.text2}>LOGIN</Text>
          </Pressable>
        </View>
        <View style={styles.row4}>
          <Pressable style={styles.btnCreate}>
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  row1: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  row2: {
    flex: 1.5,
    alignItems: "center",
  },
  row3: {
    flex: 0.5,
    alignItems: "center",
  },
  row4: {
    flex: 1,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 30,
  },
  input: {
    borderColor: "white",
    backgroundColor: "#dcbc3c",
    width: 310,
    height: 50,
    marginTop: 25,
    borderTopColor: "white",
    borderRightColor: "white",
    borderBottomColor: "white",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  inputPassword: {
    backgroundColor: "#dcbc3c",
    width: 275,
    height: 50,
    borderRadius: 1,
    marginTop: 25,
    borderBottomColor: "white",
    borderTopColor: "white",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  imgEmail: {
    width: 40,
    resizeMode: "contain",
    backgroundColor: "#dcbc3c",
    marginTop: 25,
    borderLeftColor: "white",
    borderBottomColor: "white",
    borderTopColor: "white",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // border: "1px solid white",
  },
    imgEye: {
        width: 40,
        resizeMode: "contain",
        backgroundColor: "#dcbc3c",
        marginTop: 25,
        borderRightColor: "white",
        borderBottomColor: "white",
        borderTopColor: "white",
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        // border: "1px solid white",
    },
  password: {
    flexDirection: "row",
  },
  name: {
    flexDirection: "row",
  },
  text2: {
    fontSize: "21px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "black",
    width: 350,
    height: "50px",
    justifyContent: "center",
    marginTop: 20,
  },
  text3: {
    fontSize: "20px",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
});
