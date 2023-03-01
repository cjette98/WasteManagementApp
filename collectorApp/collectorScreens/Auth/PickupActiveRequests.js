import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PickupActiveRequests = ({ navigation }) => {
  const [item, setItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  //Retrieves ID
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const activeRequests = JSON.parse(
          await AsyncStorage.getItem("activeRequests")
        );
        setItem(activeRequests);
      } catch (error) {
        console.log("Error fetching selected item:", error);
      }
    };

    fetchItem();
  }, []);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
        }}
      >
        Active Requests
      </Text>

      <FlatList
        data={item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.list}
            onPress={() => toggleModal(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listFlatList}
      />

      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{selectedItem}</Text>
          <TouchableOpacity onPress={() => toggleModal(null)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkseagreen",
  },
  listFlatList: {
    width: "80%",
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
  },
  modalContainer: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    width: '80%',
    height: 200,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,

  },
  closeButton: {
    fontSize: 20,
    color: "white",
  },
});

export default PickupActiveRequests;
