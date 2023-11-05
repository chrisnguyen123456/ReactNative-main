import { View, Text, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const API_Sreen_01 = ({ navigation }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>
            <Image style={{ width: 200, height: 200 }} source={require("../assets/Capture.png")} />
            <Text style={{ fontSize: 30 }}>MANAGE YOUR TASK</Text>
            <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 20, width: '80%', height: 30, justifyContent: 'space-around', alignItems: 'center' }}>
                <AntDesign name='mail' />
                <TextInput style={{ width: '90%', height: '100%' }} placeholder='Enter your name' placeholderTextColor='gray'></TextInput>
            </View>
            <View style={{ width: '30%' }}>
                <Pressable style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#00FFFF', width: '100%', height: 30 , borderRadius: 20}}
                    onPress={() => navigation.navigate('Screen02')}>
                    <Text>GET STARTED</Text>
                    <AntDesign name='arrowright' />
                </Pressable>
            </View>
        </View>
    )
}

export default API_Sreen_01