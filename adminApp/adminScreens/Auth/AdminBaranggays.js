import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AdminBaranggay = ({navigation}) => {
const [items, setItems] = useState([
    { name: 'Bagsangan' },
    { name: 'Bacolod' },
    { name: 'Batang' },
    { name: 'Bolos' },
    { name: 'Buenavista' },
    { name: 'Bulawan' },
    { name: 'Cariedo' },
    { name: 'Casini' },
    { name: 'Cawayan' },
    { name: 'Cogon' },
    { name: 'Gabao' },
    { name: 'Gulang-Gulang' },
    { name: 'Gumapia' },
    { name: 'Santo Domigo(Lamboon)' },
    { name: 'Liang' },
    { name: 'Macawayan' },
    { name: 'Mapaso' },
    { name: 'Monbon' },
    { name: 'Patag' },
    { name: 'Salvacion' },
    { name: 'San Agustin' },
    { name: 'San Isidro' },
    { name: 'San Juan' },
    { name: 'San Julian' },
    { name: 'San Pedro' },
    { name: 'Tabon-tabon' },
    { name: 'Tinampo' },
    { name: 'Tongdol' },
]);
const [searchTerm, setSearchTerm] = useState('');
const [filteredItems, setFilteredItems] = useState(items);

const handleSearch = () => {
const newData = items.filter(item => {
const itemData = item.name.toUpperCase();
const textData = searchTerm.toUpperCase();

    return itemData.indexOf(textData) > -1;
    });
    setFilteredItems(newData);
    };

    const goto = (brgyName) => {
        navigation.navigate("PerBrgy", { brgyName });
      }
      

return (
    <View style={styles.container}>
        <TextInput
        style={styles.Input}
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
        placeholder="   Search Baranggay"
        />

        <TouchableOpacity 
            style={{backgroundColor: 'chocolate', padding: 10, margin: 15, borderRadius: 10}}
            onPress={handleSearch}
        >
            <Text style={{color: 'antiquewhite', fontWeight: 'bold', fontSize: 15}}>Search</Text>
        </TouchableOpacity>

        <FlatList style={{ width: '80%'}}
            data={filteredItems}
            renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => goto(item.name)}
            style={styles.list}>
                <Text style={{fontSize: 20}}>{item.name}</Text>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.name}
        />
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
    Input: {
        height: 40, 
        borderColor: 'transparent', 
        borderWidth: 1, 
        width: '80%', 
        marginTop: 80, 
        backgroundColor: 'white'
    },
    list: {
        backgroundColor: 'antiquewhite', 
        padding: 10, 
        marginVertical: 5, 
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

  });

export default AdminBaranggay;