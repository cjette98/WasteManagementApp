import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/Main/HomeScreen";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import Signup from "./src/screens/Auth/CustomerSignup";
import CustomerSignupSuccessful from "./src/screens/Auth/CustomerSignupSuccessful";
import OngoingCompleted from "./src/screens/Auth/CustomerOngoingCompleted";

const Stack = createStackNavigator();

export default function App() {

  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OngoingCompleted" component={OngoingCompleted} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="CustomerSignupSuccessful" component={CustomerSignupSuccessful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
