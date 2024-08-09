import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const HomeScreen = () => {
    const data = [
        {
            title: "Aenean leo",
            body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            title: "In turpis",
            body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
            title: "Lorem Ipsum",
            body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
    ];

    return (
        <View style={tw`mt-10 flex flex-col justify-center items-center`}>
            <View style={tw`bg-white w-90 p-2 rounded-md flex flex-col gap-2 shadow-md`}>
                <Text style={tw`text-left`}>Good Afternoon,</Text>
                <Text style={tw`text-left font-extrabold`}>Guntur Saputro</Text>
                <View style={tw`flex`}>
                    <Text style={tw`text-left text-gray-400`}>Your last login was 2 hours ago from Chrome</Text>
                    <Text style={tw`text-left text-gray-400`}>on Windows 10</Text>
                </View>
            </View>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})