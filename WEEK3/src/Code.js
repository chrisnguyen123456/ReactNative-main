import { StatusBar } from "expo-status-bar";
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

export default function Code() {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.text1}>CODE</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text2}>VERIFICATION</Text>
        </View>
        <View style={styles.row3}>
          <Text style={styles.text3}>Enter ontime password sent on</Text>
          <Text style={styles.text3}>++849092605798</Text>
        </View>
        <View style={styles.row4}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View style={styles.row5}>
          {/* <Button title="VERIFY CODE" color={"#E3C000"}
            style={styles.btn}/> */}
          <Pressable style={styles.btn}>
            <Text style={styles.text4}>VERIFY CODE</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  row1: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text1: {
    fontSize: "60px",
    fontWeight: "bold",
  },
  row2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row4: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  row5: {
    flex: 2,
  },
  text2: {
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: "20px",
    marginBottom: "20px",
  },
  text3: {
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "20px",
    textAlign: "center",
  },
  input: {
    width: "55px",
    height: "55px",
    borderWidth: 1.5,
  },
  text4: {
    fontSize: "21px",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#E3C000",
    height: "50px",
    justifyContent: "center",
    marginTop: "50px",
  },
});
