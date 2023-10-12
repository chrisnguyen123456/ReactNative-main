import { StatusBar } from "expo-status-bar";
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
import React from "react";
import {ColorSelection} from "./ColorSelection";

const Product =({ navigation })=> {
  return (
    
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productImage}>
          <Image
            style={styles.image}
            source={require("../assets/vs_blue.png")}
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.txtInfo}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={styles.rating}>
        <Image
          style={styles.ratingStar}
          source={require("../assets/star.png")}
        />
        <Image
          style={styles.ratingStar}
          source={require("../assets/star.png")}
        />
        <Image
          style={styles.ratingStar}
          source={require("../assets/star.png")}
        />
        <Image
          style={styles.ratingStar}
          source={require("../assets/star.png")}
        />
        <Image
          style={styles.ratingStar}
          source={require("../assets/star.png")}
        />
        <Text style={styles.txtRating}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.textPrice}>1.790.000đ</Text>
        <Text style={styles.textOldPrice}>1.790.000đ</Text>
      </View>
      <View style={styles.Refund}>
        <Text style={styles.textRefund}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <TouchableOpacity>
          <Image
            style={styles.imgQuestion}
            source={require("../assets/question.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.color}>
        <TouchableOpacity
          style={styles.btnColor}
          onPress={() => navigation.navigate('Color')}
        >
          <Text style={styles.textColor}>4 MÀU-CHỌN MÀU</Text>
          <Image
            style={styles.imgarrow}
            source={require("../assets/arrow.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Buy}>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.textBuy}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  product: {
    width: Dimensions.get("window").width,
    height: 400,
  },
  rating: {
    flex: 0.5,
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 10,
  },
  price: {
    flex: 0.5,
    flexDirection: "row",
  },
  textPrice: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 20,
  },
  textOldPrice: {
    fontSize: 17,
    color: "#6f6f6f",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    marginLeft: 50,
  },
  Refund: {
    flex: 0.4,
    flexDirection: "row",
  },
  textRefund: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 20,
    fontFamily: "Arial",
  },
  imgQuestion: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 5,
  },
  color: {
    flex: 1,
    alignItems: "center",
  },
  btnColor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 350,
    height: 40,
    borderRadius: 10,
  },
  imgarrow: {
    width: 12,
    height: 14,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
  },
  textColor: {
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "Arial",
  },
  Buy: {
    flex: 1,
    alignItems: "center",
  },
  btnBuy: {
    backgroundColor: "red",
    width: 350,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBuy: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "Arial",
    color: "white",
  },
  image: {
    width: 300,
    height: 360,
    resizeMode: "contain",
  },
  productImage: {
    alignItems: "center",
  },
  productInfo: {
    marginTop: 10,
    marginLeft: 10,
  },
  txtInfo: {
    position: "absolute",
    // alignItems: "flex-start",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "Arial",
  },
  ratingStar: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 5,
  },
  txtRating: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "Arial",

    marginLeft: 30,
  },
});
export default Product;
