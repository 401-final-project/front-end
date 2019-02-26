import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Setup from './form';
import HelloWorld from './components/qr';
import ShareSelector from './components/share-selector.js';

export default class App extends React.Component {
  render() {
    console.log('I have been called');

    return (
      <ScrollView>
        <Text>This is going to be our app!</Text>
        <Setup />
        <HelloWorld />
        <ShareSelector />
      </ScrollView>
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
