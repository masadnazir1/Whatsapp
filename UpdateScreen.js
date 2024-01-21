// UpdateScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const dummyStories = [
  {
    id: '1',
    user: 'John Doe',
    image: require('../assets/user.png'), // Replace with your story image
  },
  {
    id: '2',
    user: 'Jane Smith',
    image: require('../assets/user.png'), // Replace with your story image
  },
  // Add more dummy stories as needed
];

const dummyStatusUpdates = [
  {
    id: '1',
    user: 'Alice',
    status: 'Feeling happy today!',
    time: '2 hours ago',
  },
  {
    id: '2',
    user: 'Bob',
    status: 'Work in progress...',
    time: '4 hours ago',
  },
  // Add more dummy status updates as needed
];

const UpdateScreen = () => {
  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItem}>
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyUser}>{item.user}</Text>
    </TouchableOpacity>
  );

  const renderStatusUpdateItem = ({ item }) => (
    <TouchableOpacity style={styles.statusUpdateItem}>
      <Text style={styles.statusUpdateUser}>{item.user}</Text>
      <Text style={styles.statusUpdateText}>{item.status}</Text>
      <Text style={styles.statusUpdateTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.storiesContainer}>
        <Text style={styles.title}>Stories</Text>
        <FlatList
          data={dummyStories}
          keyExtractor={(item) => item.id}
          renderItem={renderStoryItem}
          horizontal
        />
      </View>

      <View style={styles.statusUpdatesContainer}>
        <Text style={styles.title}>Status Updates</Text>
        <FlatList
          data={dummyStatusUpdates}
          keyExtractor={(item) => item.id}
          renderItem={renderStatusUpdateItem}
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
  storiesContainer: {
    marginBottom: 20,
  },
  statusUpdatesContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  storyUser: {
    marginTop: 5,
    textAlign: 'center',
  },
  statusUpdateItem: {
    marginBottom: 16,
  },
  statusUpdateUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusUpdateText: {
    fontSize: 14,
    color: '#555555',
  },
  statusUpdateTime: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },
});

export default UpdateScreen;
