import { StyleSheet, Text, View, Image, Button, Pressable ,Touchable} from "react-native";
export default function Home1() {
      return (
    <View style={styles.wrap}>
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
          {/* <TouchableOpacity style={styles.btn1} >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} >
          <Text style={styles.textBtn}>Sign Up</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
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
  textBtn: {
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '12px'
  },
  btn1: {
    backgroundColor: 'yellow',
    width: '100px',
    height: '50px',
    marginRight: '20px',
    borderRadius: '10px'
  },
  btn2: {
    backgroundColor: 'yellow',
    width: '100px',
    height: '50px',
    marginLeft: '20px',
    borderRadius: '10px'
  }
});
