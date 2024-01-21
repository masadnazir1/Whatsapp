// StatusesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const dummyStatuses = [
  {
    id: '1',
    user: 'Alice',
    status: 'Enjoying a sunny day!',
    time: '1 hour ago',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  {
    id: '2',
    user: 'Bob',
    status: 'Feeling inspired!',
    time: '3 hours ago',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  {
    id: '3',
    user: 'Charlie',
    status: 'Coding all night!',
    time: '5 hours ago',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  // Add more dummy statuses as needed
];

const dummyContacts = [
  {
    id: '1',
    name: 'John Doe',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  // Add more dummy contacts as needed
];

const StatusesScreen = () => {
  const renderStatusItem = ({ item }) => (
    <TouchableOpacity style={styles.statusItem}>
      <Image source={item.avatar} style={styles.statusAvatar} />
      <View style={styles.statusContent}>
        <Text style={styles.statusUser}>{item.user}</Text>
        <Text style={styles.statusText}>{item.status}</Text>
        <Text style={styles.statusTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Image source={item.avatar} style={styles.contactAvatar} />
      <Text style={styles.contactName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.statusBoxContainer}>
        {/* Render three status boxes */}
        <FlatList
          data={dummyStatuses}
          keyExtractor={(item) => item.id}
          renderItem={renderStatusItem}
          horizontal
        />
      </View>

      <View style={styles.contactsContainer}>
        <Text style={styles.title}>Contacts</Text>
        {/* Render dummy contacts */}
        <FlatList
          data={dummyContacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContactItem}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  statusBoxContainer: {
    marginBottom: 20,
  },
  statusItem: {
    marginRight: 16,
    width: 180,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusContent: {
    marginTop: 10,
  },
  statusUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  statusText: {
    fontSize: 12,
    color: '#555555',
    marginTop: 5,
  },
  statusTime: {
    fontSize: 10,
    color: '#777777',
    marginTop: 5,
  },
  contactsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contactName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default StatusesScreen;
