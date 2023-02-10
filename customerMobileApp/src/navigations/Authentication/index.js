import React from 'react'
import LoginScreen from '../../screens/Auth/LoginScreen'
import RegistrationScreen from '../../screens/Auth/RegistrationScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStackNavigator = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator 
        screenOptions={{headerShown : false}}
        initialRouteName="LOGIN">
            <AuthStackNavigator.Screen name="LOGIN_SCREEN" component={LoginScreen} />
            <AuthStackNavigator.Screen name="REGISTRATION_SCREEN" component={RegistrationScreen} />
        </AuthStackNavigator.Navigator>
    )
}

export default AuthNavigator