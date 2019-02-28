import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, Button } from 'react-native';
import * as Expo from 'expo';

import store from '../store';
import DetailModal from '../components/detailsModal';
import ContactList from '../components/contact-list.js';

class UserContacts extends React.Component {
  render(){
    return (
      <ScrollView>
        <ContactList />
      </ScrollView>
    )
  }
}

export default UserContacts; 