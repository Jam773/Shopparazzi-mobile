// src/screen/LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import your logo image
import logo from '../../assets/logo.png'; // Replace '../assets/logo.png' with the actual path to your logo image

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Add the logo */}
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Your email" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with email</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or</Text>
      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <FontAwesome name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <FontAwesome name="facebook" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>Don't have a Shopparazi account? Sign up</Text>
      {/* Bottom Navigation Component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Add some spacing between the logo and header
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF006B',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  or: {
    marginVertical: 20,
  },
  signUpText: {
    marginTop: 20,
  },
});

export default LoginScreen;