import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
export default function GenPassword() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.row1}>
          <Text style={styles.text1}>PASSWORD</Text>
          <Text style={styles.text1}>GENERATOR</Text>
        </View>
        <View style={styles.row2}></View>
        <View style={styles.row3}>
          <Text style={styles.text2}>Password length</Text>
          <TextInput editable style={styles.textinput}></TextInput>
        </View>
        <View style={styles.row4}>
          <Text style={styles.text2}>Include lower case letters</Text>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setIsChecked} />
        </View>
        <View style={styles.row5}>
          <Text style={styles.text2}>Include upper case letters</Text>
          <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setIsChecked2} />
        </View>
        <View style={styles.row6}>
          <Text style={styles.text2}>Include numbers</Text>
          <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setIsChecked3} />
        </View>
        <View style={styles.row7}>
          <Text style={styles.text2}>Include special symbol</Text>
          <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setIsChecked4} />
        </View>
        <View style={styles.row8}>
        <Pressable style={styles.btnGen}>
  <Text style={styles.text3}>GENERATE PASSWORD</Text>
</Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
  background: {
    flex: 1,
    backgroundColor: "#23235B",
    margin: 20,
    borderRadius: 20,
  },
  row1: {
    flex: 2,
    backgroundColor: "#23235B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text1: {
    fontSize: 27,
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "700",
  },
  text2: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "700",
    marginLeft: 38,
  },
  row2: {
    flex: 0.6,
    backgroundColor: "#151537",
    width: 297,
    marginLeft: 28,
  },
  row3: {
    flex: 0.7,
    flexDirection: "row",
    marginTop: 50,

    alignItems: "center",
  },
  row4: {
    flex: 0.7,
    alignItems: "center",
    flexDirection: "row",
  },
  row5: {
    flex: 0.7,
    flexDirection : "row",
        alignItems: "center",
  },
  row6: {
    flex: 0.7,
    alignItems: "center",
    flexDirection : "row",
  },
  row7: {
    flex: 0.7,
    alignItems: "center",
    flexDirection : "row",
  },
  row8: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  textinput: {
    backgroundColor: "#fff",
    width: 118,
    height: 33,
    marginLeft: 20,
  },
    checkbox: {
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        position: "absolute",
        right: 20,
    },
    btnGen: {
        backgroundColor: "#3B3B98",
        width: 269,
        height:55,
        justifyContent: "center",
        marginTop: 10,
        borderColor: "black",
        borderWidth: 1,
      },
      text3: {
        fontSize: "18px",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
        textAlign: "center",
      },
});
