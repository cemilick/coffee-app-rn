import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuScreen from './screen/MenuScreen';
import { Image, Text } from 'react-native';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    const Icon = () => <Image source={require('../src/assets/logo.png')} resizeMode='contain' style={{ width: 150, height: 80, marginLeft: 10 }} />

    return (
        <Tab.Navigator initialRouteName='Homepage'>
            <Tab.Screen name="Homepage" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (<MIcon name='home' color={color} size={26} />),
                headerTitle: props => <Icon />
            }} />
            <Tab.Screen name="Menu" component={MenuScreen}
                options={{
                    headerLeft: () => null,
                    headerTitle: 'MENU',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color }) => (<MIcon name='menu' color={color} size={26} />),
                }} />
        </Tab.Navigator>
    );
}

export default BottomTab;