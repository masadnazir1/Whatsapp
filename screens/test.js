// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // You can choose different icon libraries
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import StatusesScreen from './StatusesScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ChatsScreen = () => (
  <View style={{ flex: 1 }}>
    <ChatScreen />
  </View>
);

const UpdateScreen = () => (
  <View style={{ flex: 1 }}>
    <StatusesScreen />
  </View>
);

const NotificationScreenComponent = () => (
  <View>
    <Text>Notification Screen</Text>
    <NotificationScreen />
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const toggleSettingsModal = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image source={require('./path-to-your-logo/logo.png')} style={styles.logo} />

        {/* Three dummy icons */}
        <TouchableOpacity onPress={() => console.log('Icon 1 pressed')}>
          <MaterialIcons name="person" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Icon 2 pressed')}>
          <MaterialIcons name="search" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSettingsModal}>
          <FontAwesome name="gear" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Settings Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSettingsModalVisible}
        onRequestClose={toggleSettingsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Settings Content Goes Here</Text>
            <Button title="Close" onPress={toggleSettingsModal} />
          </View>
        </View>
      </Modal>

      {/* Bottom Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#3498db',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Update"
          component={UpdateScreen}
          options={{
            tabBarLabel: 'Update',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="update" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreenComponent}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bell" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  headerIcon: {
    marginLeft: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
