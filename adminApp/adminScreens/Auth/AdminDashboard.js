import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SquareButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const AdminDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SquareButton title="Active Customer" onPress={() => navigation.navigate('AdminActiveCustomer')} />
        <SquareButton title="Active Collector" onPress={() => navigation.navigate('AdminActiveCollector')} />
      </View>
      <View style={styles.row}>
        <SquareButton title="Registered Baranggay" onPress={() => navigation.navigate('AdminBaranggay')} />
        <SquareButton title="Transaction History" onPress={() => navigation.navigate('AdminTransactions')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 26
  },
  button: {
    width: 130,
    height: 130,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'antiquewhite',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'chocolate'
  },
});

export default AdminDashboard;
