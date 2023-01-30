import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth,app} from './src/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { collection,addDoc } from "firebase/firestore"; 
import { db } from './src/config/firebase';




export default function App() { 

  const regNewUser = async() => {
    try {
     await createUserWithEmailAndPassword(auth,'nijel88562@ekcsoft.com', 'cust@123')
    await addDoc(collection(db, "Users"), {
      name: "Abel",
      email: "nijel88562@ekcsodf.com",
      contact_number: "09387950432"
    });
    
    } catch (error) {
      console.log(error)
    }
  }
  const loginUser = async () => {
    try {
    const resp =  await signInWithEmailAndPassword(auth, 'nijel88562@ekcsoft.com', 'cus@123');
    console.log(JSON.stringify(resp))
    } catch (error) {
     console.log('INI',error)
    }
  }

  return (
    <View style={styles.container}>
      <Text onPress={regNewUser}>Hello </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
