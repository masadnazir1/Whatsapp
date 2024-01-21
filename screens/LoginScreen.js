// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
  };

  const handleLogin = () => {
    // Navigate to the OTP screen with the selected country code and phone number
    navigation.navigate('Otp', { countryCode, phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlagButton={true}
          withFilter={true}
          withAlphaFilter
          onSelect={handleCountrySelect}
          containerButtonStyle={styles.countryPickerButton}
        />
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
