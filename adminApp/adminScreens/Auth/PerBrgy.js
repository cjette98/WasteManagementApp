import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const PerBrgy = ({ route, navigation }) => {
  const { brgyName } = route.params;
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

  const pressHandler = () => {
    navigation.navigate('AdminPickupProfile');
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.list} onPress={pressHandler}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'darkseagreen'}}>
      <Text style={{marginTop: 50, fontWeight: 'bold', fontSize:30, color: 'antiquewhite'}}>{brgyName}</Text>
      

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{width: '80%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PerBrgy;
