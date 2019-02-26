import React from 'react';
import { StyleSheet, View } from 'react-native';

import Setup from './form';
import HelloWorld from './qr';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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

export default App; 