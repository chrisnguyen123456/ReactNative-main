import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
export default function Comment() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Image style={styles.imgUSB} source={require("../assets/usb.png")} />
        <Text style={styles.txtUSB}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.row2}>
        <AirbnbRating
          count={5}
          reviews={["Tệ", "Không tốt", "Bình thường", "Hài lòng", "Cực kỳ hài lòng"]}
          defaultRating={5}
          size={30}
            reviewSize={18}
            reviewColor="black"
        />
      </View>
      <View style={styles.row3}>
        <Pressable style={styles.camera}>
            <Image
                style={styles.imgCamera}
                source={require("../assets/camera.png")}
            />
            <Text style={styles.txtCamera}>Thêm hình ảnh</Text>
        </Pressable>
      </View>
      <View style={styles.row4}>
        <TextInput
          style={styles.inputComment}
          editable
          multiline
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        />
      </View>
      <View style={styles.row5}>
        <Pressable style={styles.btnCreate}>
          <Text style={styles.text3}>Gửi</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row1: {
    flex: 1,
    flexDirection: "row",
  },
  txtUSB: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500",
    marginLeft: 10,
  },
  row2: {
    flex: 1,
  },
  row3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    camera: {
        width: 320,
        height: 68,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "blue",
    },
  row4: {
    flex: 2.5,
  },
  row5: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
  },
  imgUSB: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    margin: 16,
  },
  imgCamera: {
    resizeMode: "contain",
    width: 39,
    height: 32,
    margin: 16,
  },
    txtCamera: {
        fontSize: 18,
        fontWeight: "500",
    },
    inputComment: {
        height: 222,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        marginLeft: 34,
        marginRight: 34,
    },
    btnCreate: {
        backgroundColor: "#18189a",
        width: 330,
        height: "50px",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5,
      },

      text3: {
        fontSize: "20px",
     color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
});
