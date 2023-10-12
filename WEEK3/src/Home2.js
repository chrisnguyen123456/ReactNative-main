import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home2 = () => {
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.CircleShapeView} />
          <Text style={[styles.title, styles.titleHead]}>GROW</Text>
          <Text style={styles.title}>YOUR BUSINESS</Text>
          <Text style={styles.text}>
            We will help you to grow your business using online server
          </Text>
          <View style={styles.buttonView}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:
    //   "linear-gradient(180deg, rgba(0, 204, 249, 0.359978) 0%, #00CCF9 100%)",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
  },
  linearGradient: {
    height: "100%",
  },
  CircleShapeView: {
    marginTop: 50,
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "15px solid #000000",
  },
  wrap: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
  },
  titleHead: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    width: 300,
    textAlign: "center",
    marginTop: 50,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
  },
  button: {
    backgroundColor: "#000",
    marginTop: 50,
    borderRadius: 10,
    width: 100,
    fontWeight: "500",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});

export default Home2;
