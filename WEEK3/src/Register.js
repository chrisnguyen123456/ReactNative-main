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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
var radio_value = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.text1}>REGISTER</Text>
      </View>
      <View style={styles.row2}>
        <TextInput style={styles.input} placeholder="Name" />

        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.password}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry //ẩn password
          />
          <Image
            style={styles.imgEmail}
            source={require("../assets/eye.png")}
          />
        </View>
        <TextInput style={styles.input} placeholder="Birthday" /></View>
        <View style={styles.radio}>
          <RadioForm
            radio_props={radio_value}
            initial={-1}
            
            onPress={(value) => {}}
            buttonColor={"black"}
            selectedButtonColor={"black"}
            formHorizontal={true}
          />
        </View>
        <View style={styles.row3}>
        <Pressable style={styles.btn}>
          <Text style={styles.text2}>REGISTER</Text>
        </Pressable>
        </View>
      <View style={styles.row4}>
        <Text style={styles.text3}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8efde",
  },

  row1: {
    flex: 0.5,
  },
  row2: {
    flex: 2.4,
    alignItems: "center",
  },
  row3: {
    flex: 0.5,
    alignItems: "center",

  },
  row4: {
    flex: 1,
    alignItems: "center",
  },
  text1: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Arial",
    textAlign: "center",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#d0e4d4",
    width: 350,
    height: 50,
    borderRadius: 1,
    marginTop: 25,
  },
  inputPassword: {
    backgroundColor: "#d0e4d4",
    width: 310,
    height: 50,
    borderRadius: 1,
    marginTop: 25,
  },
  imgEmail: {
    width: 40,
    resizeMode: "contain",
    backgroundColor: "#d0e4d4",
    marginTop: 25,
  },
  password: {
    flexDirection: "row",
  },
  radio: {
   marginTop: 5,
   marginLeft: 17,
  },
  text2: {
    fontSize: "21px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#c44c3c",
    width: 350,
    height: "50px",
    justifyContent: "center",
    marginTop: 20,
  },
  text3: {  marginTop: 20,
    fontSize:14,
    fontWeight: "500",
  },
});
