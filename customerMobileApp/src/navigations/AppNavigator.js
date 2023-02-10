import AuthNavigator from "./Authentication";
import MainhNavigator from "./Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStackNavigator.Navigator
        screenOptions={{headerShown : false}}
        >
            <AppStackNavigator.Screen name={"AuthScreen"} component={AuthNavigator}/>
            <AppStackNavigator.Screen name={"MainScreen"} component={MainhNavigator}/>
        </AppStackNavigator.Navigator>
    )
}

export default AppNavigator