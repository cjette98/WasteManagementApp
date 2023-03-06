import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import Profile from './ProfileSection';

const AdminPickupProfile = () => {

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.list}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pickup Collector Profile</Text>
      
      <View style={{marginTop: 50}}>
        <Profile />
      </View>

      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}
      />
    </SafeAreaView>
  )
}

export default AdminPickupProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'antiquewhite',
    marginTop: 100
  },
  listContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 150,
  },
  list: {
    height: 80,
    backgroundColor: "antiquewhite",
    paddingHorizontal: 40,
    borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 10,
  },
});
