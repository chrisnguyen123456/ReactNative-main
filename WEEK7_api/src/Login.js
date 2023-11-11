import {StyleSheet,
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
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login({navigation}){
    const [name, setName] = useState("");
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.img} source={require('../assets/Image 95.png')}/>
                </View>
                <View style={styles.header}>
                    <Text style={styles.txtHeader}>MANAGE YOUR</Text>
                    <Text style={styles.txtHeader}>TASK</Text>
                </View>
                <View style={styles.input}>
                    <Image style={styles.imgEmail} source={require('../assets/Frame.png')}/>
                    <TextInput style={styles.txtInput} placeholder="Enter your name"
                    value={name} onChangeText={(username)=>
                   setName(username)
                    }/>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => 
                     navigation.navigate("ListJob",{paramKey : name})
                    }>
                        <Text style={styles.txtLogin}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    flex:1,
},
image:{
    flex:3,
    alignItems:'center',
},
header:{
    flex:1,
},
txtHeader:{
    fontSize:24,
    color:'blue',
    fontStyle:'Epilogue',
    textAlign:'center',
},
input:{
    flex:1,
    alignItems:'center',
},
txtInput:{
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10,
    paddingLeft:40,

},
btn:{
    flex:1,
    alignItems:'center',
},
btnLogin:{
    width:300,
    height:50,
    backgroundColor:'#00BDD6',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
},
txtLogin:{
    fontSize:18,
    color:'white',
},
img:{
    width:250,
    height:250, 
    marginTop:30,   
    },
    imgEmail:{
        width:20,
        height:20,
        position:'absolute',
        left:50,
        top:15,
    },
})
