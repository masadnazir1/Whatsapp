// OtpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function OtpScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']); // Array to store each digit of the OTP
  const hardcodedOtp = ['1', '2', '3', '4']; // Hardcoded OTP for testing

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Check if all digits are entered
    if (newOtp.every((digit) => digit !== '')) {
      // For testing purposes, compare entered OTP with hardcoded OTP
      if (JSON.stringify(newOtp) === JSON.stringify(hardcodedOtp)) {
        // Navigate to the Home screen
        navigation.navigate('Home');
      } else {
        // For now, let's log an error if the OTP is incorrect
        console.error('Incorrect OTP');
      }
    }

    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpDigit}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(index, text)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => handleOtpChange()}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  otpDigit: {
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 10,
    width: '18%',
  },
  submitButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
