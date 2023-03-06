import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '..screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import Signup from '../screens/Auth/CustomerSignup';
import CustomerSignupSuccessful from '../screens/Auth/CustomerSignupSuccessful';
import OngoingCompleted from '../screens/Auth/CustomerOngoingCompleted';


const screens = {
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    OngoingCompleted: {
        screen: OngoingCompleted
    },
    Signup: {
        screen: Signup
    },
    CustomerSignupSuccessful: {
        screen: CustomerSignupSuccessful
    }

}
const HomesStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
