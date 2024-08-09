import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Homepage' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Homepage" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (<MIcon name='home' color={color} size={26} />),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTab;