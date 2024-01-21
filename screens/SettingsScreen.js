// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const settingsData = [
    { icon: 'wifi', title: 'Wi-Fi' },
    { icon: 'bluetooth', title: 'Bluetooth' },
    { icon: 'data-usage', title: 'Data Usage' },
    { icon: 'battery-full', title: 'Battery' },
    { icon: 'security', title: 'Security' },
    { icon: 'apps', title: 'Apps' },
    { icon: 'storage', title: 'Storage' },
    { icon: 'developer-mode', title: 'Developer Options' },
    // Add more settings items as needed
  ];

  const renderSettingsItem = ({ icon, title }) => (
    <TouchableOpacity key={title} style={styles.settingItem}>
      <MaterialIcons name={icon} size={24} color="#000000" />
      <Text style={styles.settingText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      {settingsData.map(renderSettingsItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  settingText: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default SettingsScreen;
