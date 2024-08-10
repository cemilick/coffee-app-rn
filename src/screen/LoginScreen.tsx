import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { saveCredentials } from '../redux/action'

const LoginScreen = () => {
    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const loginAction = async (data: any) => {
        const postData = new FormData();
        postData.append('username', data.email);
        postData.append('password', data.password);
        postData.append('grant_type', 'password');
        postData.append('client_id', 'e78869f77986684a');
        postData.append('client_secret', '0a40f69db4e5fd2f4ac65a090f31b823');

        await axios.post('https://soal.staging.id/oauth/token', postData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch(saveCredentials({
                    token: res.data.access_token,
                    login_time: new Date().getTime(),
                    expired_time: new Date().getTime() + res.data.expires_in
                }))

                navigation.navigate('Home');
            }
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} onSubmit={values => loginAction(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={tw`w-full h-full flex justify-center items-center`}>
                    <Image source={require('../assets/logo.png')} resizeMode='contain' style={tw`w-80 h-40 mb-20`} />
                    <TextInput style={tw`border border-gray-400 w-3/4 p-2 rounded-md`} placeholder="Email" onChangeText={handleChange('email')} />
                    <TextInput style={tw`border border-gray-400 w-3/4 p-2 rounded-md mt-2`} placeholder="Password" onChangeText={handleChange('password')} />
                    <TouchableOpacity style={tw`bg-red-500 w-3/4 p-2 mt-4 rounded-md`} onPress={() => handleSubmit()}>
                        <Text style={tw`text-white text-center`}>Login</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})