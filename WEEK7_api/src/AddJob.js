import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { useState, useEffect } from "react";
import ListJob from "./ListJob";
export default function AddJob({ navigation }) {
    const[job, setJob] = useState("");
    const save=()=>{
        fetch("https://654272dcad8044116ed3645a.mockapi.io/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
                "workTitle": job,
            })
          })
            .then(res => {
              return res.json();
            })
            .then(res => {
                if (res) {
                navigation.navigate("ListJob");
              }
            })
            .catch((error) => console.error(error));
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHeader}>Add Your Job</Text>
            <View style={styles.viewInput}>
                <Image style={styles.iconList} source={require("../assets/list.png")} />
                <TextInput style={styles.input}
                onChangeText={(text)=>{
                    setJob(text);
                }} placeholder="input your job" />
        </View>
        <View style={styles.finish}>
    <TouchableOpacity style={styles.btnFinish} onPress={()=>{
        save();
    }}>
        <Text style={styles.txtFinish}>FINISH</Text>
    </TouchableOpacity>
  </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    txtHeader: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#000",
        margin: 10,
        textAlign: "center",
        marginTop: 50,
    },
    viewInput: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    iconList: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 10,
        left: 30,
    },
    input: {
        width: 340,
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000",
        paddingLeft: 50,
    },
    finish: {
        alignItems: "center",
        marginTop: 60,
    },
    btnFinish: {
        width: 160,
        height: 40,
        backgroundColor: "#00BDD6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    txtFinish: {
        color: "#fff",
    },
});