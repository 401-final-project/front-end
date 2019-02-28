import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import ShareSelector from '../components/share-selector.js';
import QR from '../components/qr.js';

class ShareScreen extends React.Component {
  render() {
    return(
      <ScrollView>
        <QR />
        <ShareSelector />
      </ScrollView>
    )
  }
  
}

export default ShareScreen;