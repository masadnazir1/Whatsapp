// ChatScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatDetailScreen from './ChatDetailScreen'; // Import the ChatDetailScreen component

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
    id: '5',
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
    id: '80',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '87',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },

  {
    id: '27',
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


  {
    id: '67',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '107',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '37',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },






  {
    id: '847',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },



  {
    id: '837',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '8427',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },



  {
    id: '8337',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },











  {
    id: '83357',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },


  {
    id: '84427',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },



  {
    id: '8347',
    name: 'Jane Smith',
    message: 'Hey there!',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },













  // Add more dummy chats as needed
];

const ChatScreen = () => {
  const navigation = useNavigation();

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatDetail', { chatId: item.id, chatName: item.name })}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
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
