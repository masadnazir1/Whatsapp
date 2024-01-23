// ChatDetailScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ChatDetailScreen = ({ route }) => {
  const { chatId, chatName } = route.params;

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello, how are you?',
      sender: 'contact',
    },
    {
      id: '2',
      text: 'I am doing well, thanks!',
      sender: 'user',
    },



    {
      id: '4',
      text: 'I am doing well, thanks!',
      sender: 'user',
    },


    // Add more demo messages as needed
  ]);

  const renderItem = ({ item }) => (
    <View style={item.sender === 'user' ? styles.userMessage : styles.contactMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{chatName}</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.messagesContainer}
        inverted  // to display the latest message at the bottom
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          multiline
          // Add any additional TextInput props as needed
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => console.log('Message sent!')}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  messagesContainer: {
    padding: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  contactMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  messageText: {
    color: 'white', // Adjust text color for better visibility
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    padding: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    padding: 8,
  },
  sendButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#3498db',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatDetailScreen;
