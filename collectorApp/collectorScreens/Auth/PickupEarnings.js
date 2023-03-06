import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const PickupEarnings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Earnings</Text>
    </SafeAreaView>
  )
}

export default PickupEarnings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen'
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    
  }
})