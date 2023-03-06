import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CollectorHomeScreen from '../collectorScreens/Main/collectorHomeScreen';
import CollectorLoginScreen from '../collectorScreens/Auth/CollectorLogin';
import CollectorPickupProfile from '../collectorScreens/Auth/CollectorPickupProfile';
import PickupEarnings from '../collectorScreens/Auth/PickupEarnings';
import TransactionHistory from '../collectorScreens/Auth/TransactionHistory';
import PickupActiveRequests from '../collectorScreens/Auth/PickupActiveRequests';
import PickupNewRequests from '../collectorScreens/Auth/PickupNewRequests';

const screens = {
    CollectorHomeScreen: {
        screen: CollectorHomeScreen
    },
    CollectorLogin: {
        screen: CollectorLoginScreen
    },
    CollectorPickupProfile: {
        screen: CollectorPickupProfile
    },
    PickupEarnings: {
        screen: PickupEarnings
    },
    TransactionHistory: {
        screen: TransactionHistory
    },
    PickupActiveRequests: {
        screen: PickupActiveRequests
    },
    PickupNewRequests: {
        screen: PickupNewRequests
    }

}
const HomesStack = createStackNavigator(screens);

export default createAppContainer(CollectorHomeStack);