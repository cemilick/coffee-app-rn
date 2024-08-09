import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation: any = useNavigation();

    return (
        <View style={tw`w-full h-full flex justify-center items-center`}>
            <Image source={require('../assets/logo.png')} resizeMode='contain' style={tw`w-80 h-40 mb-20`} />
            <TextInput style={tw`border border-gray-400 w-3/4 p-2 rounded-md`} placeholder="Email" />
            <TextInput style={tw`border border-gray-400 w-3/4 p-2 rounded-md mt-2`} placeholder="Password" />
            <TouchableOpacity style={tw`bg-red-500 w-3/4 p-2 mt-4 rounded-md`} onPress={() => navigation.navigate('Home')}>
                <Text style={tw`text-white text-center`}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})