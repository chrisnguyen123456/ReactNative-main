import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const list1 = () => {
  const data = [
    {
      img: require("../assets/ca_nau_lau.png"),
      title: "Ca nấu lẩu, nấu mì mini",
      nameShop: "Devang",
    },
    {
      img: require("../assets/ga_bo_toi.png"),
      title: "1KG khô gà bơ tỏi",
      nameShop: "LTD Food",
    },
    {
      img: require("../assets/xa_can_cau.png"),
      title: "Xe cần cẩu đa năng",
      nameShop: "Thế giới đồ chơi",
    },
    {
      img: require("../assets/do_choi_dang_mo_hinh.png"),
      title: "Đồ chơi dạng mô hình",
      nameShop: "Thế giới đồ chơi",
    },
    {
      img: require("../assets/lanh_dao_gian_don.png"),
      title: "Lãnh đạo giản đơn",
      nameShop: "Minh Long Book",
    },
    {
      img: require("../assets/lanh_dao_gian_don.png"),
      title: "Lãnh đạo giản đơn",
      nameShop: "Minh Long Book",
    },
    {
      img: require("../assets/ca_nau_lau.png"),
      title: "Ca nấu lẩu, nấu mì mini",
      nameShop: "Devang",
    },
    {
      img: require("../assets/ga_bo_toi.png"),
      title: "1KG khô gà bơ tỏi",
      nameShop: "LTD Food",
    },
    {
      img: require("../assets/xa_can_cau.png"),
      title: "Xe cần cẩu đa năng",
      nameShop: "Thế giới đồ chơi",
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#1BA9FF",
          alignContent: "center",
        }}
      >
        <Icon name="arrow-left" size={24} color="white" />
        <Text style={{ fontSize: 24, color: "white" }}>Chat</Text>
        <Icon name="shopping-cart" size={24} color={"white"} />
      </View>
      <Text style={{}}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: 16,
                  alignItems: "center",
                  paddingVertical: 5,
                  marginHorizontal: 6,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 16,
                    alignItems: "center",
                    paddingVertical: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <Image style={{ width: 74, height: 74 }} source={item.img} />
                  <View style={{ maxWidth: 190 }}>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                      {item.title}
                    </Text>
                    <Text>Shop {item.nameShop}</Text>
                  </View>
                  <View>
                    <Pressable
                      style={{
                        backgroundColor: "red",
                        width: 88,
                        height: 38,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 18 }}>Chat</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: "15px",
        }}
      >
        <Icon name="bars" size={24} />
        <Icon name="home" size={24} />
        <Icon name="undo" size={24} />
      </View>
    </View>
  );
};

export default list1;
