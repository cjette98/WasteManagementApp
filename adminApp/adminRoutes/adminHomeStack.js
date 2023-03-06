import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AdminHomeScreen from '../adminScreens/Main/AdminHomescreen';
import AdminLoginScreen from '../adminScreens/Auth/AdminLogin';
import AdminDashboard from '../adminScreens/Auth/AdminDashboard';
import AdminBaranggay from '../adminScreens/Auth/AdminBaranggays';
import AdminPickupProfile from '../adminScreens/Auth/AdminPickupProfile';
import PerBrgy from '../adminScreens/Auth/PerBrgy';
import AdminActiveCollector from '../adminScreens/Auth/AdminActiveCollector';
import AdminActiveCustomer from '../adminScreens/Auth/AdminActiveCustomer';
import AdminTransactions from '../adminScreens/Auth/AdminTransactions';

const screens = {
    AdminHome: {
      screen: AdminHomeScreen,
    },
    AdminLoginScreen: {
      screen: AdminLoginScreen,
    },
    AdminDashboard: {
      screen: AdminDashboard,
    },
    AdminBaranggay: {
      screen: AdminBaranggay,
    },
    AdminPickupProfile: {
      screen: AdminPickupProfile,
    },
    PerBrgy: {
      screen: PerBrgy,
    },
    AdminActiveCollector: {
      screen: AdminActiveCollector
    },
    AdminActiveCustomer: {
      screen: AdminActiveCustomer
    },
    AdminTransactions: {
      screen: AdminTransactions
    }
  };
  
const adminHomeStack = createStackNavigator(screens);

export default createAppContainer(adminHomeStack);