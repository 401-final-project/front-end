/*
credit for this ingenuitiy goes here:
https://github.com/expo/examples/blob/master/with-socket-io/app/App.js
*/

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import ShareSelector from '../components/share-selector.js';
const io = require('socket.io-client');
import Subscriber from '../lib/subscriber.js';

const SocketEndpoint = 'https://fl-401-final-back-end-q.herokuapp.com';

class Socket extends React.Component {
  state = {
    isConnected: false,
    data: null,
  };

  componentDidMount() {
    const subscriber = new Subscriber('users');

    subscriber.subscribe('destroy', (payload) => {
      console.log('destroy happened', payload);
    });
  }

  render (){
    return (
      <View>
        <Text>connected: {this.state.isConnected? true : false }</Text>
        <Text>ping response: {this.state.data}</Text>
      </View>
    );
  }
}

class ShareScreen extends React.Component {
  render() {
    return(
      <ScrollView>
        <Socket />
      </ScrollView>
    );
  }
}

export default ShareScreen;