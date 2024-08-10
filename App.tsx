import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screen/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { Image } from 'react-native';
import BottomTab from './src/BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import QRCodeScreen from './src/screen/QRCodeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Icon = () => <Image source={require('./src/assets/logo.png')} resizeMode='contain' style={{ width: 150, height: 80, marginLeft: 10 }} />

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitle: props => <Icon /> }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={BottomTab} options={{ headerLeft: props => <></> }} />
            <Stack.Screen name='QRCode' component={QRCodeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App