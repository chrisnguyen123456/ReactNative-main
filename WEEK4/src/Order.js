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
import { useState, useEffect } from "react";

export default function Order() {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productImageWrap}>
          <Image
            source={require("../assets/book.png")}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            Nguyên lý phân tích và ứng dụng
          </Text>
          <Text style={styles.productName2}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOldPrice}>141.800 đ</Text>
          <View style={styles.productQuantityWrap}>
            <View style={styles.productQuantity}>
              <Pressable style={styles.buttonQuantity}>
                <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <Text style={styles.quantity}>1</Text>
              <Pressable style={styles.buttonQuantity}>
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
            <View style={styles.productPayLater}>
              <Text style={styles.linkText}>Mua sau</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.discount}>
        <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
        <Text style={styles.linkText}>Xem tại đây</Text>
      </View>
      <View style={styles.voucher}>
        <View style={styles.voucherLeft}>
          <Image
            source={require("../assets/yellow_block.png")}
            style={styles.voucherImage}
          />
          <Text style={styles.voucherText}>Mã giảm giá</Text>
        </View>
        <Pressable style={styles.buttonVoucher}>
          <Text style={styles.buttonVoucherText}>Áp dụng</Text>
        </Pressable>
      </View>
      <View style={styles.space}></View>
      <View style={styles.question}>
        <Text style={styles.questionText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.linkText}>Nhập tại đây</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Tạm tính</Text>
        <Text style={styles.totalMoney}>141.800 đ</Text>
      </View>
      <View
        style={{
          backgroundColor: "#C4C4C4",
          height: 80,
          width: 500,
        }}
      ></View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalMoney}>141.800 đ</Text>
      </View>
      <View style={styles.checkOut}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonCheckoutText}>Tiến hành đặt hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'#fff',
  },
  space: {
    width: "100%",
    height: 13,
    backgroundColor: "#C4C4C4",
  },
  //
  product: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  productImageWrap: {
    // width: 'auto',
    // height: 'auto',
    // borderRadius: 5,
    // overflow: 'hidden',
    // marginRight: 10,
  },
  productImage: {
    width: 110,
    height: 160,
    borderRadius: 5,
  },
  productName: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    // marginBottom: 10,
  },
  productName2: {
    color: "#000",
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    color: "#ee0d0d",
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productOldPrice: {
    color: "#ccc",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 22,
    marginBottom: 10,
    textDecorationLine: "line-through",
  },
  productQuantityWrap: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  productQuantity: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    alignItems: "center",
  },
  buttonQuantity: {
    backgroundColor: "#ccc",
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  quantity: {
    color: "#000",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  productPayLater: {
    width: "auto",
  },
  linkText: {
    color: "#134fec",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  discount: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginBottom: 20,
  },
  discountText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 30,
  },

  voucher: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginBottom: 30,
    justifyContent: "space-between",
  },
  voucherLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderColor: "#000",

    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  voucherText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
  },
  buttonVoucher: {
    backgroundColor: "#134fec",
    width: 120,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonVoucherText: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  voucherImage: {
    width: 32,
    height: 16,
    marginRight: 10,
  },
  //
  question: {
    display: "flex",
    flexDirection: "row",
    width: 360,
    height: 55,
    marginBottom: 15,
    alignItems: "center",
  },
  questionText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  total: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  totalText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalMoney: {
    color: "#ee0d0d",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalMoney2: {
    color: "#ee0d0d",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },

  //
  checkOut: {
    width: "90%",
    // position: 'absolute',
    //
  },
  button: {
    backgroundColor: "#ee0d0d",
    width: "100%",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  buttonCheckoutText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
//
