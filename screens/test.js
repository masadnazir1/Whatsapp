// HomeScreen.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import StatusesScreen from './StatusesScreen';
import { useNavigation } from '@react-navigation/native';
import ChatDetailScreen from './ChatDetailScreen'; // Import ChatDetailScreen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatsScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ChatsList"
      component={ChatScreen}
      options={{ headerTitle: '' }} // Hide header title for ChatList
    />
    <Stack.Screen
      name="ChatDetail"
      component={ChatDetailScreen}
      options={{ headerTitle: '' }} // Hide header title for ChatDetail
    />
  </Stack.Navigator>
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

  const handleChatPress = () => {
    // Navigate to the ChatDetail screen with a sample chatId and chatName
    navigation.navigate('ChatDetail', { chatId: '1', chatName: 'John Doe' });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image source={require('../assets/Logo.png')} style={styles.logo} />

        <View style={styles.icons}>
          <TouchableOpacity onPress={() => console.log('Icon 2 pressed')}>
            <MaterialIcons name="search" size={24} color="#000000" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Icon 3 pressed')}>
            <FontAwesome name="gear" size={24} color="#000000" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sample TouchableOpacity to simulate pressing a chat item */}
      <TouchableOpacity style={styles.sampleChatItem} onPress={handleChatPress}>
        <Text style={styles.sampleChatItemText}>Press to Open Chat</Text>
      </TouchableOpacity>

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
