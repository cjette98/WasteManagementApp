import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CollectorHomeScreen from "./collectorScreens/Main/CollectorHomeScreen";
import CollectorLoginScreen from "./collectorScreens/Auth/CollectorLogin";
import CollectorPickupProfile from "./collectorScreens/Auth/CollectorPickupProfile";
import PickupEarnings from "./collectorScreens/Auth/PickupEarnings";
import TransactionHistory from "./collectorScreens/Auth/TransactionHistory";
import PickupActiveRequests from "./collectorScreens/Auth/PickupActiveRequests";
import PickupNewRequests from "./collectorScreens/Auth/PickupNewRequests";

const Stack = createStackNavigator();

export default function App() {

  const [selectedRequests, setSelectedRequests] = useState([]);
  const [data, setData] = useState([
    'Request 1',
    'Request 2',
    'Request 3',
    'Request 4',
    'Request 5',
    'Request 6',
    'Request 7',
    'Request 8',
    'Request 9',
    'Request 10'
  ]);

  const moveRequestToActive = (index) => {
    const selectedRequest = data[index];
    setSelectedRequests([...selectedRequests, selectedRequest]);
    setData(data.filter((_, i) => i !== index));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CollectorHomeScreen" component={CollectorHomeScreen} />
        <Stack.Screen name="CollectorLoginScreen" component={CollectorLoginScreen} />
        <Stack.Screen name="CollectorPickupProfile" component={CollectorPickupProfile} />
        <Stack.Screen name="PickupEarnings" component={PickupEarnings} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="PickupNewRequests"
          options={{ title: 'New Requests' }}
        >
          {(props) => (
            <PickupNewRequests
              {...props}
              data={data}
              moveRequestToActive={moveRequestToActive}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="PickupActiveRequests"
          options={{ title: 'Active Requests' }}
        >
          {(props) => (
            <PickupActiveRequests
              {...props}
              selectedRequests={selectedRequests}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
