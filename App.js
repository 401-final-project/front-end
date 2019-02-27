import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProfileForm from './components/profileForm';
import QR from './components/qr';
import Storage from './components/storage.js';
import Scanner from './components/scanner'
import ShareSelector from './components/share-selector.js';
import store from './store';
import {Provider} from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <Text>This is going to be our app!</Text>
          <Text>-----</Text>
          <Text>-----</Text>

          <ProfileForm />
          <Text>ProfileForm:</Text>
          <Storage />
          <QR />
          <ShareSelector />
          <Scanner />
         </ScrollView>
      </Provider>
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