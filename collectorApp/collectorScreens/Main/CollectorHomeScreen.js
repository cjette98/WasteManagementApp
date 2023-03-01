import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CollectorHomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('CollectorLoginScreen');
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
