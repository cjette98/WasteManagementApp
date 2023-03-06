import { StyleSheet, Text, View, SafeAreaView, Headline } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomerSignupSuccessful = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('Login');
      }

  return (
    <SafeAreaView style={styles.container}>
         <Text style={{fontWeight: 'bold', fontSize: 25, marginBottom: 20}}>SIGNUP COMPLETE</Text>
        
        <View style={{ alignItems: 'center'}}>
            <Text>Congratulations you have successfully</Text> 
            <Text>completed your registration!</Text>
        </View>

        <TouchableOpacity style={styles.Button} onPress={pressHandler} > 
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign In</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default CustomerSignupSuccessful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: 'darkseagreen',
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    }
})