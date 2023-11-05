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
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    image: require("../assets/giacchuyen 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/daynguon 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/dauchuyendoipsps2 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/dauchuyendoi 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/carbusbtops2 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/daucam 1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
];
const Item = ({ image, title, price, coupon }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.star} source={require("../assets/rate.png")} />
      </View>
      <View style={styles.priceCoupon}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.coupon}>{coupon}</Text>
    </View>
  </View>
);
export default function Screen2() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <FlatList
 numColumns={2}
     data={DATA}
     renderItem={({ item }) => (
       <Item title={item.title} image={item.image} price={item.price} coupon={item.coupon} />
     )}
   />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  img: {
    resizeMode: "contain",
    height: 155,
    width: "100%",
  },
  content: {
    flex: 3,
    marginLeft: 20,
    
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  star: {
    resizeMode: "contain",
    height: 16,
    width: 115,
    marginTop: 5,
    marginBottom: 5,
  },
  priceCoupon: {
    flex: 1,
    // borderWidth: 1,
    flexDirection: "row",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
  coupon: {
    fontSize: 15,
    fontWeight: "500",
    color: "#969DAA",
    marginLeft: 20,
  },
});
