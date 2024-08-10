import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import tw from 'twrnc'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/helpers';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const scrollViewRef = useRef<any>(null);
    const [activeTab, setActiveTab] = useState('');
    const [sectionPositions, setSectionPositions] = useState<any>({});
    const [data, setData] = useState<any>({});

    const navigation: any = useNavigation();
    const token = useSelector((state: any) => state.token);

    const fetchMenu = async () => {
        axios.post('https://soal.staging.id/api/menu', { show_all: 1 }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            if (res.status !== 200) {
                navigation.navigate('Login');
            }
            setData(res.data.result);
            setActiveTab(res.data.result?.categories[0]?.category_name);
        }).catch(err => {
            console.log(err);
            navigation.navigate('Login');
        });
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    const handleLayout = (event: any, sectionName: any) => {
        const { y } = event.nativeEvent.layout;
        setSectionPositions((prevPositions: any) => ({
            ...prevPositions,
            [sectionName]: y,
        }));
    };

    const scrollToSection = (sectionName: any) => {
        setActiveTab(sectionName);
        const y = sectionPositions[sectionName];
        if (y !== undefined) {
            scrollViewRef.current.scrollTo({ y, animated: true });
        }
    };

    const activeTabClass = tw`text-lg text-black font-semibold pb-3 px-4 border-b-4 mb-[-15.6] border-black`;
    const inactiveTabClass = tw`text-lg text-gray-900 font-bold pb-3 px-4 mb-[-15.6]`;

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Tab Menu */}
            <View style={tw`bg-white border-b border-gray-300`}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`flex-row py-4 gap-2 px-2`}>
                    {data?.categories?.map((category: any) => (
                        <TouchableOpacity onPress={() => scrollToSection(category?.category_name)} key={category?.category_name}>
                            <Text style={activeTab === category?.category_name ? activeTabClass : inactiveTabClass}>
                                {category?.category_name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Scrollable Content */}
            <ScrollView ref={scrollViewRef} contentContainerStyle={tw`p-4 bg-white`}>
                {data?.categories?.map((category: any) => (
                    <View style={tw`mb-5`} onLayout={(event) => handleLayout(event, category?.category_name)} key={category?.category_name}>
                        <Text style={tw`text-xl font-semibold text-gray-800 mb-4`}>{category?.category_name}</Text>
                        {category?.menu?.map((product: any) => (
                            <View style={tw`flex-row items-center bg-white p-3 mb-4`} key={product?.name}>
                                <Image source={{ uri: product?.photo }} style={tw`w-12 h-12 rounded-lg mr-4`} />
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-lg font-semibold text-gray-800`}>{product?.name}</Text>
                                    <Text style={tw`text-sm text-gray-600 text-justify`}>{product?.description}</Text>
                                </View>
                                <Text style={tw`text-lg font-bold text-gray-800 ml-3`}>{formatCurrency(product?.price)}</Text>
                            </View>
                        ))}
                        {/* Repeat for other products */}
                    </View>
                ))}
                {/* Repeat for other sections */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tabMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#333',
    },
    scrollViewContent: {
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productDescription: {
        fontSize: 14,
        color: '#777',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default MenuScreen