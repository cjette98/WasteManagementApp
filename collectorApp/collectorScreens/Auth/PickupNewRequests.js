import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PickupNewRequests = ({ navigation }) => {
  const [requests, setRequests] = useState([
    "Request 1",
    "Request 2",
    "Request 3",
    "Request 4",
    "Request 5",
    "Request 6",
    "Request 7",
    "Request 8",
    "Request 9",
    "Request 10",
  ]);

  const handleSelectItem = async (itemId) => {
    try {
      // Store the selected item ID in AsyncStorage
      await AsyncStorage.setItem('selectedItemId', itemId.toString());
      navigation.navigate('PickupActiveRequest', { itemId });
    } catch (error) {
      console.log('Error storing selected item ID:', error);
    }
  };


  const [selected, setSelected] = useState([]);

  //Set request
  const handleMoveToActiveRequests = async() => {
    await AsyncStorage.setItem('activeRequests', JSON.stringify(selected))
    navigation.navigate("PickupActiveRequests", selected);
  };

  const handleSelectRequest = (item) => {
    setSelected([...selected, item]);
    console.log(selected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#000",
            marginTop: 50,
          }}
        >
          Dailies
        </Text>

        <FlatList
          data={requests}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.list}
              disabled={selected.includes(item)}
              onPress={() => handleSelectRequest(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
              {selected.includes(item) && (
                <Text style={{ color: "red" }}>Selected</Text>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listFlatList}
        />

        <TouchableOpacity
          style={styles.move}
          onPress={handleMoveToActiveRequests}
        >
          <Text style={{ color: "#fff" }}>Move to Active Requests</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickupNewRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkseagreen",
  },
  listContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  listFlatList: {
    width: "100%",
    backgroundColor: "transparent",
  },
  list: {
    height: 80,
    backgroundColor: "antiquewhite",
    borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  itemText: {
    fontSize: 20,
    color: "black",
  },
  move: {
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "chocolate",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "50%",
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
});
