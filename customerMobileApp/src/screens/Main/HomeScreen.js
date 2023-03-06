import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen'
  },
  button: {
    backgroundColor: 'antiquewhite',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkgreen',
    fontSize: 30
  },
})
