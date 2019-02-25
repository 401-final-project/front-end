import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Contacts extends React.Component {
  state = {};
  async componentDidMount() {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({permissions: status});
  }
  getContacts = async () => {
    console.log('I have been called');
    const { contacts } = await Contacts.getContactsAsync();
    this.setState({contacts: contacts.data});
  }
  render() {
    console.log('I have been called');

    this.getContacts();
    return (
      <View>
        <Text>Contacts</Text>
      </View>
    );
  }
}

export default Contacts;
