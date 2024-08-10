import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import MenuScreen from './screen/MenuScreen';
import { Image, Text } from 'react-native';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    const Icon = () => <Image source={require('../src/assets/logo.png')} resizeMode='contain' style={{ width: 150, height: 80, marginLeft: 10 }} />

    return (
        <Tab.Navigator initialRouteName='Homepage' screenOptions={{
            tabBarActiveTintColor: '#4f5150'
        }}>
            <Tab.Screen name="Homepage" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (<Image source={require('../src/assets/home1.png')} style={{ width: 26, height: 26, tintColor: color }} />),
                headerTitle: props => <Icon />
            }} />
            <Tab.Screen name="Menu" component={MenuScreen}
                options={{
                    headerLeft: () => null,
                    headerTitle: 'MENU',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => (<Image source={require('../src/assets/menu1.png')} style={{ width: 26, height: 26, tintColor: color }} />),
                }} />
        </Tab.Navigator>
    );
}

export default BottomTab;