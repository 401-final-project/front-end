import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import ShareSelector from '../components/share-selector.js';
import QR from '../components/qr.js';

class ShareScreen extends React.Component {
  render() {
    return(
      <ScrollView >
      <View style={styles.container}>
        <QR style={styles.qrScanner}/>
        <ShareSelector />
        </View>
      </ScrollView>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#f2f3f4'
  },
  qrScanner: {
    width: 300,
    height: 300,
  }
});

// <View style={styles.container}>
// style={styles.qrScanner}


export default ShareScreen;