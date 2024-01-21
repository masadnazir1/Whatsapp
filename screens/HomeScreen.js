// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
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
  const [isSearchActive, setSearchActive] = useState(false); // Added state for search bar
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSettingsModal = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  const toggleSearchBar = () => {
    setSearchActive(!isSearchActive);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image source={require('../assets/Logo.png')} style={styles.logo} />

        {isSearchActive ? (
          // Search Bar
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        ) : (
          // Regular Icons
          <View style={styles.icons}>
            <TouchableOpacity onPress={toggleSearchBar}>
              <MaterialIcons name="search" size={24} color="#000000" style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSettingsModal}>
              <FontAwesome name="gear" size={24} color="#000000" style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
        )}
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
          headerShown: false,
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
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#99dbff',
    marginTop: 30,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: '45%',
    color: '#000000',
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginLeft: 16,
    fontSize: 16,
  },
  logo: {
    width: '20%',
    height: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  headerIcon: {
    marginLeft: 20,
    marginRight: -3,
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
