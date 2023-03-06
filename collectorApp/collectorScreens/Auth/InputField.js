import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { TextInput, MD2Colors as Color } from 'react-native-paper';

const InputField = ({label, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            mode='outline'
            placeholder={placeholder}
            placeholderTextColor= 'lightgrey'
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
            underlineColor = {Color.transparent}
            activeUnderlineColor = {Color.transparent}
        />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    label: {
        marginBottom: 10,
    },
    input: {
        width: Dimensions.get('screen').width - 40,
        height: 40,
        backgroundColor: Color.transparent,
        paddingHorizontal: 40,
        borderColor: Color.grey900,
        borderWidth: 1,
        borderRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
})
