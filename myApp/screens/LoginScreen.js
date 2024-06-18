import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Handle the login logic
    console.log('Login with:', name, email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcomeBack}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.socialLogin}>
        <TouchableOpacity>
          <Image source={require('../assets/applelogo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/googlelogo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/facebooklogo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.registerText}>Haven't an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeBack: {
    fontSize: 20,
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerText: {
    color: '#0000ff',
  },
});

export default LoginScreen;