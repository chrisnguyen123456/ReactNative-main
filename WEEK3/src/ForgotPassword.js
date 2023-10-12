import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  button,
  Pressable,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ForgotPassword() {
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Image style={styles.img} source={require("../assets/lock.png")} />
          <Text style={[styles.titleOn, styles.titleUp]}>FORGET</Text>
          <Text style={styles.titleOn}>PASSWORD</Text>

          <Text style={styles.text}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
          <View style={styles.email}>
            <Image
              style={styles.imgEmail}
              source={require("../assets/email.png")}
            />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.button}>
            <Pressable style={styles.button1}>
              <Text style={styles.buttonClick}>NEXT</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
  },
  linearGradient: {
    height: "100%",
  },
  input: {
    backgroundColor: "#C4C4C4",
    width: 300,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
  },
  img: {
    width: "105px",
    height: "117px",
  },
  email: {
    flexDirection: "row",
  },
  imgEmail: {
    width: 40,
    resizeMode: "contain",
    backgroundColor: "#C4C4C4",
    marginTop: 30,
  },
  wrap: {
    flex: 1,
  },
  titleOn: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  titleUp: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    width: 300,
    textAlign: "center",
    marginTop: 40,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
  },
  button1: {
    backgroundColor: "#E3C000",
    marginTop: 40,
    borderRadius: 1,
    width: 350,
    fontWeight: "300",
  },
  buttonClick: {
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
    padding: 10,
    fontWeight: "700",
  },
});
