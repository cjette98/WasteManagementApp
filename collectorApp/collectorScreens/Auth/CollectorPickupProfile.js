import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import Profile from './ProfileSection';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Btn = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const CollectorPickupProfile = ({ navigation }) => {

  const handleNavigateToPickupActiveRequest = () => {
    navigation.navigate('PickupActiveRequest');
  };

  useEffect(() => {
    const clearSelectedItemId = async () => {
      try {
        // Clear the stored selected item ID from AsyncStorage
        await AsyncStorage.removeItem('selectedItemId');
      } catch (error) {
        console.log('Error clearing selected item ID:', error);
      }
    };

    navigation.addListener('blur', clearSelectedItemId);

    return () => {
      navigation.removeListener('blur', clearSelectedItemId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Profile</Text>
      <Profile />
      <Btn title="Earnings" onPress={() => navigation.navigate('PickupEarnings')} />
      <Btn title="Transaction History" onPress={() => navigation.navigate('TransactionHistory')} />
      <Btn title="Active Requests" onPress={() => navigation.navigate('PickupActiveRequests')} />
      <Btn title="New Requests" onPress={() => navigation.navigate('PickupNewRequests')} />
    </View>
  );
};

export default CollectorPickupProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    color: 'antiquewhite',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 40
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
    width: '50%',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'darkgreen'
  }
});
