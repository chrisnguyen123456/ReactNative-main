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

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.text1}>LOGIN</Text>
      </View>
      <View style={styles.row2}>
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
        <Pressable style={styles.btn}>
          <Text style={styles.text2}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.row3}>
        <Text style={styles.text3}>When you agree to terms and conditions</Text>
        <Pressable>
          <Text style={styles.txtForgotPass}>For got your password?</Text>
        </Pressable>
        <Text style={styles.text3}>Or login with</Text>
      </View>
      <View style={styles.row4}>
        <View style={[styles.backgroundIcon, styles.fb]}>
          <Image
            style={styles.imgfb}
            source={require("../assets/icon_fb.png")}
          />
        </View>
        <View style={[styles.backgroundIcon,styles.zalo]}>
          <Image
            style={styles.imgzalo}
            source={require("../assets/iconzalo.png")}
          />
        </View>
        <View style={[styles.backgroundIcon,styles.google]}>
          <Image
            style={styles.imggoogle}
            source={require("../assets/icongoogle.png")}
          />
        </View>
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
    flex: 1,
  },
  row2: {
    flex: 2,
    alignItems: "center",
  },
  row3: {
    flex: 1,

  },
  row4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
    height: 45,
    borderRadius: 1,
    marginTop: 25,
  },
  inputPassword: {
    backgroundColor: "#d0e4d4",
    width: 310,
    height: 40,
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
    marginTop: 67,
  },
  text3: {
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  txtForgotPass: {
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#5D25FA", //background: #5D25FA;
  },
  imgfb: {
    marginTop: 7,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  imgzalo: {
    marginTop: 7,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  imggoogle: {
    marginTop: 7,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  backgroundIcon: {
    width: 110,
    height: 45,
    borderRadius: 2,
    alignItems: "center",
  },
    fb: {
        backgroundColor: "#285c8c",
    },
    zalo: {
        backgroundColor: "#1894c4",
    },
    google: {
        border: " 1px solid blue",
    },
});
