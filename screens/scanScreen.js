import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import Scanner from '../components/scanner.js';
import QR from '../components/qr.js';
import GPSSensor from '../components/gps-sensor';

class ScanScreen extends React.Component {
  render() {
    return(
      <ScrollView>
        <Scanner />
      </ScrollView>
    );
  }
}

export default ScanScreen;