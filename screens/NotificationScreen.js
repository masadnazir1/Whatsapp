// NotificationScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const dummyNotifications = [
  {
    id: '1',
    user: 'John Doe',
    message: 'Liked your photo',
    time: '2 hours ago',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  {
    id: '2',
    user: 'Jane Smith',
    message: 'Commented on your post',
    time: '4 hours ago',
    avatar: require('../assets/user.png'), // Replace with your avatar image
  },
  // Add more dummy notifications as needed
];

const NotificationScreen = () => {
  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationUser}>{item.user}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555555',
  },
  notificationTime: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },
});

export default NotificationScreen;
