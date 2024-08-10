import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import QRCode from 'react-native-qrcode-svg'
import { useSelector } from 'react-redux'

const QRCodeScreen = () => {
    const { userData } = useSelector((state: any) => state);

    return (
        <View style={tw`w-full h-full flex justify-center items-center gap-10 bg-slate-50`}>
            <Text>Show QR Code below to the casier</Text>
            <QRCode value={userData?.qr_code} size={250} quietZone={1} />
        </View>
    )
}

export default QRCodeScreen