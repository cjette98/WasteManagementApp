import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import InputField from './InputField';

const CollectorLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pressHandler = () => {
    navigation.navigate('CollectorPickupProfile');
  };

  const signupHandler = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headline style={styles.headline}>Sign In</Headline>

      <View>
        <Text>Welcome back to BasuraMo-HakotMo</Text>
        <Text style={{ marginBottom: 30 }}>Online Waste Pickup</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        
      <InputField label={'Your Email'} placeholder={'e.g. Mike@cmail.com'} value={email} onChangeText={setEmail} />

      <InputField label={'Your Password'} placeholder={'Minimum of 8 characters'} value={password} onChangeText={setPassword} />

      </View>
      <Button
        mode="contained"
        onPress={pressHandler}
        style={styles.button}
        contentStyle={{ backgroundColor: 'darkseagreen' }}
      >
        Login
      </Button>


    </SafeAreaView>
  );
};

const adminLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Login navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
  signUpbutton: {
    marginTop: 20,
  },
});

export default CollectorLoginScreen;
