import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TextInput,
} from "react-native";
export default function Login3() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Image
          style={styles.imgEye}
          source={require("../assets/eyeball.png")}
        />
      </View>
      <View style={styles.row2}>
        <View style={styles.name}>
          <Image
            style={styles.imgEmail}
            source={require("../assets/user2.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
          />
        </View>
        <View style={styles.password}>
          <Image
            style={styles.imgEmail}
            source={require("../assets/pwd.png")}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Please input password"
            secureTextEntry //ẩn password
          />
        </View>
      </View>
      <View style={styles.row3}>
        <Pressable style={styles.btn}>
          <Text style={styles.text2}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.row4}>
        <View>
          <Pressable style={styles.btnRe}>
            <Text style={styles.text3}>Register</Text>
          </Pressable>
          </View>
          <View>
          <Pressable style={styles.btnFo}>
  <Text style={styles.text3}>Forgot Password</Text>
</Pressable>
</View>
      </View>
      <View style={styles.row5}>
        <Text style={styles.text4}>Other Login Methods</Text>
      </View>
      <View style={styles.row6}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row1: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row2: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    color: "black",
    fontSize: "18px",
  },
    text4: {
    color: "black",
    fontSize: "18px",
    },
  row3: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  row4: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  row5: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  row6: {
    flex: 1,
  },
  imgEye: {
    width: 140,
    height: 140,
    resizeMode: "contain",

  },
  text2: {
    fontSize: "21px",
    color: "white",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "blue",
    width: 350,
    height: "50px",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "white",
    width: 310,
    height: 50,
    marginTop: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputPassword: {
    backgroundColor: "white",
    width: 310,
    height: 50,
    borderRadius: 1,
    marginTop: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  imgEmail: {
    width: 40,
    resizeMode: "contain",
    backgroundColor: "white",
    marginTop: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  password: {
    flexDirection: "row",
  },
  name: {
    flexDirection: "row",
  },
});
