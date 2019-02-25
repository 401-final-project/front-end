import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './contacts.js';

export default class App extends React.Component {
  render() {
    console.log('I have been called');

    return (
      <View style={styles.container}>
        <Text>This is going to be our app!</Text>
        <Contacts />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
