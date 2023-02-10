import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Main/HomeScreen';
const MainStackNavigator = createNativeStackNavigator();

const MainhNavigator = () => {
    return (
        <MainStackNavigator.Navigator 
        screenOptions={{headerShown : false}}
        initialRouteName="HOME_SCREEN">
            <MainStackNavigator.Screen name="HOME_SCREEN" component={HomeScreen} />
        </MainStackNavigator.Navigator>
    )
}

export default MainhNavigator