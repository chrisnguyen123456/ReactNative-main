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
    image: require("../assets/ca_nau_lau.png"),
    title: "Ca nấu lẩu nấu mì mini",
    shop: "Devang",
  },
  {
    image: require("../assets/ga_bo_toi.png"),
    title: "1KG KHÔ GÀ BƠ TỎI",
    shop: "LTD Food",
  },
  {
    image: require("../assets/xa_can_cau.png"),
    title: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
  },
  {
    image: require("../assets/do_choi_dang_mo_hinh.png"),
    title: "Đồ chơi đang mô hình",
    shop: "Thế giới đồ chơi",
  },
  {
    image: require("../assets/lanh_dao_gian_don.png"),
    title: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
  },
  {
    image: require("../assets/hieu_long_con_tre.png"),
    title: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
  },
  {
    image: require("../assets/trump 1.png"),
    title: "Donald Trump thiên tài",
    shop: "Minh Long Book",
  },
];
const Item = ({ image, title, shop }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>Shop {shop}</Text>
    </View>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.txtBtn}>Chat</Text>
    </TouchableOpacity>
  </View>
);
export default function Screen1() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.about}>
          <Text style={styles.txtAbout}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop !
          </Text>
        </View>
        <View style={styles.list}>
          <FlatList
        numColumns={1}
            data={DATA}
            renderItem={({ item }) => (
              <Item title={item.title} image={item.image} shop={item.shop} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  about: {
    flex: 1,
  },
  txtAbout: {
    fontSize: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  list: {
    flex: 9,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#C4c4c4",

  },
  content: {
    marginLeft: 10,
    marginTop: 10,
  },
  img: {
    width: 90,
    height: 90,
    marginLeft: 5,
  },
  title: {
    fontSize: 15
  },
    shop: {
        fontSize: 15,
        color: "Black",
        marginTop: 10,
    },
    btn: {
        position: "absolute",
        backgroundColor: "#F31111",
        width: 95,
        height: 40,
        right: 30,
        top: 25,
        justifyContent: "center",


    },
    txtBtn: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
});
