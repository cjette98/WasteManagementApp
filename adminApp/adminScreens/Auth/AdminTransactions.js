import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const AdminTransactions = () => {

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
    <View style={styles.container}>
      <Text style={styles.text}>Transaction History</Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{width: '80%'}}
      />

    </View>
  )
}

export default AdminTransactions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'darkseagreen'
  },
  text: {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'antiquewhite'
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
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 10,
},
})
