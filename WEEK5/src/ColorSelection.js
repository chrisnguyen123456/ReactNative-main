import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { useState } from "react";
export default function ColorSelection() {
  const silver = require("../assets/vs_silver.png");
  const red = require("../assets/vs_red.png");
  const black = require("../assets/vs_black.png");
  const blue = require("../assets/vs_blue.png");
  const [colors, setColor] = useState(blue);
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productImage}>
          <Image style={styles.image} source={colors} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.txtInfo}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.txtInfo}>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.color}>
        <Text style={styles.txtColor}>Chọn một màu bên dưới : </Text>
        <View style={styles.colorSelection}>
          <Pressable
            style={styles.silver}
            onPress={() => setColor(silver)}
          ></Pressable>
          <Pressable
            style={styles.red}
            onPress={() => setColor(red)}
          ></Pressable>
          <Pressable
            style={styles.black}
            onPress={() => setColor(black)}
          ></Pressable>
          <Pressable
            style={styles.blue}
            onPress={() => setColor(blue)}
          ></Pressable>
        </View>
      </View>
      <View style={styles.done}>
        <TouchableOpacity style={styles.btnDone}>
          <Text style={styles.txtDone}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c4c4",
  },
  product: {
    flex: 0.8,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    width: 112,
    height: 135,
  },
  color: {
    flex: 2.5,
    backgroundColor: "#c4c4c4",
    padding: 10,
  },
  colorSelection: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  done: {
    flex: 0.3,
    padding: 10,
    alignItems: "center",
  },
  txtInfo: {
    fontSize: 15,
    fontWeight: "400",
  },
  productInfo: {
    marginTop: 10,
    marginLeft: 10,
  },
  txtColor: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 5,
  },
  txtDone: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  btnDone: {
    backgroundColor: "#234896",
    width: 350,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "#000",
    borderColor: "red",
    borderWidth: 1,
  },
  silver: {
    width: 85,
    height: 80,
    backgroundColor: "#C5F1FB",
  },
  red: {
    width: 85,
    height: 80,
    backgroundColor: "#FF0000",
  },
  black: {
    width: 85,
    height: 80,
    backgroundColor: "#000000",
  },
  blue: {
    width: 85,
    height: 80,
    backgroundColor: "#234896",
  },
});
