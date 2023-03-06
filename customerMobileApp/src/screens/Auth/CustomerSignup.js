import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button, Headline, MD2Colors as Color } from 'react-native-paper';
import InputField from '../../components/InputField';

const Signup = ({navigation}) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSignup = () => {
  navigation.navigate('CustomerSignupSuccessful');
};

return (
<SafeAreaView style={styles.container}>
<Headline style={styles.headline}>Sign Up</Headline>

<View style={styles.textContainer}>
    <Text style={styles.text}>Fill in the required input to complete</Text>
    <Text style={styles.text}>your registration</Text>
  </View>
  
  <View style={{marginVertical: 10, alignSelf: 'center'}}> 
    
    <InputField label={'Your Name'} placeholder={'e.g. Mike'} value={name} onChangeText={setName} />
   
    <InputField label={'Your Email'} placeholder={'e.g. Mike@cmail.com'} value={email} onChangeText={setEmail} />

    <InputField label={'Address'} placeholder={'e.g. Gabao'} value={address} onChangeText={setAddress} />

    <InputField label={'Your Password'} placeholder={'Minimum of 8 characters'} value={password} onChangeText={setPassword} />

    <InputField label={'Confirm Password'} placeholder={'Minimum of 8 characters'} value={confirmPassword} onChangeText={setConfirmPassword} />

    

  </View>
  <Button mode="contained" onPress={handleSignup} style={styles.button} 
          contentStyle={{ backgroundColor: 'darkseagreen', alignSelf: 'center', width: '100%' }}> 
    Submit
  </Button>
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
fontSize:30,
fontWeight: 'bold',
alignSelf: 'center'
},
textContainer: {
alignSelf: 'center'
},
text: {
marginBottom: 10,
alignSelf: 'center'
},
button: {
marginTop: 20,
width: 330,
alignSelf: 'center',

},
});

export default Signup;