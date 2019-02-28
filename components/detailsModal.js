import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Linking } from 'react-native';

class DetailModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const info = this.props.information;

    // const 

    return (
      <View style={{marginTop: 22}}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>{this.props.information.name}</Text>
        </TouchableHighlight>
      
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={styles.detailInfo}>{info.name ? `Name: ${info.name}` : null}</Text>
              <Text style={styles.detailInfo}>{info.phone ? `Phone: ${info.phone}` : null}</Text>
              <Text style={styles.detailInfo}>{info.email ? `Email: ${info.email}` : null}</Text>
              <Text style={styles.detailInfo}>{info.linkedin ? `Linkedin: ${info.linkedin}` : null}</Text>
              <Text style={styles.detailInfo}>{info.linkedin ? `linkedin.com/${info.linkedin}` : null}</Text>
              <Text style={styles.detailInfo}>{info.pinterest ? `Pinterest: ${info.pinterest}` : null}</Text>
              <Text style={styles.detailInfo}>{info.twitter ? `Twitter: ${info.twitter}` : null}</Text>
              <Text style={styles.detailInfo}>{info.facebook ? `Facebook: ${info.facebook}` : null}</Text>
              <Text style={styles.detailInfo}>{info.github ? `Github: ${info.github}` : null}</Text>
              <Text style={styles.detailInfo}>{info.instagram ? `Instagram: ${info.instagram}` : null}</Text>
              <Text style={styles.detailInfo}>{info.snapchat ? `Snapchat: ${info.snapchat}` : null}</Text>
              {/* linkedin/in/username
              pinterest.com/username
              twitter.com/username
              facebook.com/username
              github.com/username
              instagram.com/username
              snapchat.com/add/username */}

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Details</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = {
  detailInfo: {
    margin: 10
  }
}
export default DetailModal;