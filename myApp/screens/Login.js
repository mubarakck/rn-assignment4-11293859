import { useState} from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

const handleLogin = () => {
    navigation.navigate('HomeScreen', { name, email });
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>

        <Button  
        color="white"
        title="Log in"
         onPress={() =>
          navigation.navigate("HomeScreen", {Name: 'setName'}, { email: 'setEmail' })
        }
          />
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.divider} />
      </View>






      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton1}>
          <Image source={require('../assets/applelogo.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton2}>
          <Image source={require('../assets/googlelogo.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton3}>
          <Image source={require('../assets/facebooklogo.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>



      <View style={styles.registerContainer}>
        <Text>Haven't an account?</Text>
      <TouchableOpacity> 
        <Text style={styles.registerText}>
             Register
        </Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFD',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    height: 56,
    marginRight: 250,
    color: '#356899',
  },
  welcome: {
    fontSize: 28,
    fontWeight: '600',
    marginRight: 90,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginRight: 140,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 15,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 40,
  },
  socialButton1: {
    padding: 10,
  },
  socialButton2: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  socialButton3: {
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
     },
     registerContainer:{
        flexDirection: 'row',
     },
  registerText: {
    color: '#007BFF',
  },
});