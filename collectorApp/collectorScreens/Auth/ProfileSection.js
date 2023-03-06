import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [number, setNumber] = useState('09123456789');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setModalVisible(true)}
      />
 

      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
      
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={text => setNumber(text)}
            placeholder="Mobile Number"
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    color: 'grey',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: 'antiquewhite',
    width: 100,
    height: 100,
    borderRadius: 100, marginBottom: 10
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkseagreen',
  },
  input: {
    width: '80%',
    height: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'transparent',
    backgroundColor: 'antiquewhite',
  },
  saveButton: {
    backgroundColor: 'chocolate',
    padding: 5,
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20
  }
});

export default Profile;