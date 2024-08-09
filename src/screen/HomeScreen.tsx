import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Carousel } from '../components/Carousel';

const HomeScreen = () => {
    const data = [
        require('../assets/logo.png'),
        require('../assets/logo.png'),
        require('../assets/logo.png'),
    ];
    return (
        <View style={tw`flex flex-col justify-center items-center h-100 mt-20`}>
            <View style={tw`bg-white w-90 p-2 rounded-md flex flex-col gap-2 shadow-md`}>
                <Text style={tw`text-left`}>Good Afternoon,</Text>
                <Text style={tw`text-left font-extrabold`}>Guntur Saputro</Text>
                <View style={tw`flex`}>
                    <Text style={tw`text-left text-gray-400`}>Your last login was 2 hours ago from Chrome</Text>
                    <Text style={tw`text-left text-gray-400`}>on Windows 10</Text>
                </View>
            </View>
            <Carousel data={data} />
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})