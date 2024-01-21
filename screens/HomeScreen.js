// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // You can choose different icon libraries
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import StatusesScreen from './StatusesScreen';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './SettingsScreen';

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
  const [isSearchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSettingsModal = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  const toggleSearchBar = () => {
    setSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setSearchQuery(''); // Clear search query when activating the search bar
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image source={require('../assets/Logo.png')} style={styles.logo} />

        {isSearchActive ? (
          // Search Bar with Close Button
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity onPress={toggleSearchBar}>
              <FontAwesome name="close" size={24} color="#000000" style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
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
          <Image source={require('../assets/Logo.png')} style={styles.modelimg} />

              <SettingsScreen></SettingsScreen>

             <TouchableOpacity style={styles.modebtn}>
            <Button title="Close" onPress={toggleSettingsModal} />
            </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    width: '65%',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  searchBar: {
    flex: 1,
    height: 30,
    fontSize: 16,
    width: 20,
  },
  closeIcon: {
    marginLeft: 10,
   fontSize: 20,
   marginRight: 5,
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
    marginBottom: 40,
    paddingBottom: -50,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingBottom: 1,
    paddingTop: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 1,
    alignItems: 'center',
    margin: 30,
  },

  modelclose: {

   marginTop: -50,
   marginBottom : 30,








  },




  modebtn:{

          marginBottom: 30,
          marginTop: -40,


  },



  modelimg: {


       width: 100,
       height: 30,



  },



});

export default HomeScreen;
