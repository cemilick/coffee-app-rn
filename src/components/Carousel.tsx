import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

import tw from 'twrnc';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Link } from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ICarouselImage {
    data: any[]
}
const CarouselImage: React.FC<ICarouselImage> = ({ data }) => {

    const [index, setIndex] = useState(0);

    const width = Dimensions.get('window').width;
    return (
        <View>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setIndex(index)}
                renderItem={({ index, item }) => (
                    <View
                        style={tw`flex justify-center items-center mt-5 w-100 h-50 rounded-md bg-white`}
                    >
                        <Image
                            source={item}
                            style={tw`w-60 h-20 rounded-md bg-white`}
                        />
                    </View>
                )}
            />

            <View style={{
                ...tw`flex flex-row justify-between items-center px-5`,
                width: width,
                position: 'absolute',
                top: '55%'
            }}>
                <View style={tw`flex flex-row items-center justify-center`}>
                    {data.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                tw`w-2 h-2 rounded-full mx-1`,
                                i === index ? tw`bg-black` : tw`bg-gray-300`,
                            ]}
                        />
                    ))}
                </View>
                <TouchableOpacity style={tw`flex flex-row gap-2`} onPress={() => { }}>
                    <Text style={tw`text-blue-500`}>View All</Text>
                    <MIcon name='chevron-right' color='blue' size={15} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { CarouselImage as Carousel }