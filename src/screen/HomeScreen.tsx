import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Carousel } from '../components/Carousel';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatCurrency } from '../utils/helpers';
import { setUserData } from '../redux/action';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const { token } = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const userData = useSelector((state: any) => state.userData);

    const fetchData = async () => {
        axios.get('https://soal.staging.id/api/home', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            dispatch(setUserData(res.data.result));
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={tw`flex flex-col justify-center items-center h-100 mt-20`}>
            <View style={tw`bg-white w-90 p-2 rounded-md flex flex-col gap-2 shadow-md`}>
                <Text style={tw`text-left`}>{userData?.greeting},</Text>
                <Text style={tw`text-left font-extrabold`}>{userData?.name}</Text>
                <View style={tw`flex flex-row gap-5`}>
                    <TouchableOpacity style={{
                        ...tw`p-3 rounded-lg`,
                        borderRadius: 100,
                        borderColor: 'rgba(0,0,0,0.05)',
                        borderWidth: 2,
                    }} onPress={() => navigation.navigate('QRCode')}>
                        <QRCode value={userData?.qr_code} size={40} quietZone={1} />
                    </TouchableOpacity>
                    <View style={tw`w-0.5 h-full bg-gray-100 rounded-sm`} />
                    <View style={tw`flex flex-row justify-between w-3/5 py-3 gap-2`}>
                        <View style={tw`flex flex-col gap-2`}>
                            <Text style={tw`text-left`}>Saldo</Text>
                            <Text style={tw`text-left`}>Points</Text>
                        </View>
                        <View style={tw`flex flex-col gap-2`}>
                            <Text style={tw`text-right font-extrabold`}>{'Rp ' + formatCurrency(userData?.saldo)}</Text>
                            <Text style={tw`text-right font-extrabold text-cyan-300`}>{formatCurrency(userData?.point)}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Carousel data={userData?.banner} />
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})