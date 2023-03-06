import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHomeScreen from "./adminScreens/Main/AdminHomescreen";
import AdminLoginScreen from "./adminScreens/Auth/AdminLogin";
import AdminDashboard from "./adminScreens/Auth/AdminDashboard";
import AdminBaranggay from "./adminScreens/Auth/AdminBaranggays";
import AdminPickupProfile from "./adminScreens/Auth/AdminPickupProfile";
import PerBrgy from "./adminScreens/Auth/PerBrgy";
import AdminActiveCollector from "./adminScreens/Auth/AdminActiveCollector";
import AdminActiveCustomer from "./adminScreens/Auth/AdminActiveCustomer";
import AdminTransactions from "./adminScreens/Auth/AdminTransactions";

const Stack = createStackNavigator();

export default function App() {

  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AdminBaranggay" component={AdminBaranggay} />
        <Stack.Screen name="AdminPickupProfile" component={AdminPickupProfile} />
        <Stack.Screen name="PerBrgy" component={PerBrgy} />
        <Stack.Screen name="AdminActiveCollector" component={AdminActiveCollector} />
        <Stack.Screen name="AdminActiveCustomer" component={AdminActiveCustomer} />
        <Stack.Screen name="AdminTransactions" component={AdminTransactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
