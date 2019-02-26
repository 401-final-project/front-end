import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Setup from './form';
import HelloWorld from './components/qr';

export default class App extends React.Component {
  render() {
    console.log('I have been called');

    return (
      <View style={styles.container}>
        <Text>This is going to be our app!</Text>
        <Setup />
        <HelloWorld />
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
