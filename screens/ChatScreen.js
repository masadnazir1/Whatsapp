// ChatScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyChats = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hello, how are you?',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '3',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '4',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '5',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '6',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '7',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '8',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '9',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '11',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '10',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '14',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '13',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },




  {
    id: '15',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '17',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  // Add more dummy chats as needed
];

const ChatScreen = () => {
  const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    
    justifyContent: 'flex-start',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 1,

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#555555',
  },
});

export default ChatScreen;
