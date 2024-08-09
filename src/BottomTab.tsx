import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuScreen from './screen/MenuScreen';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Homepage' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Homepage" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (<MIcon name='home' color={color} size={26} />),
            }} />
            <Tab.Screen name="Menu" component={MenuScreen} options={{
                tabBarIcon: ({ color }) => (<MIcon name='menu' color={color} size={26} />),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTab;