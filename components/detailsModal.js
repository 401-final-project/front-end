import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, TouchableOpacity, Linking, View, Alert, Image } from 'react-native';

import Anchor from './anchor';
import * as icons from '../assets/util.js'; 

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

    console.log(icons.LINKEDIN_ICON);

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
              {info.linkedin ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.LINKEDIN_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://linked.com/in/${info.linkedin}`}>Linkedin</Anchor>
                </View> : null}
              {info.pinterest ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.PINTEREST_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://pinterest.com/${info.pinterest}`}>Pinterest</Anchor>
                </View> : null}
              {info.twitter ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.TWITTER_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://twitter.com/${info.twitter}`}>Twitter</Anchor>
                </View> : null}
              {info.facebook ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.FACEBOOK_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://facebook.com/${info.facebook}`}>Facebook</Anchor>
                </View> : null}
              {info.github ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.GITHUB_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://github.com/${info.github}`}>Github</Anchor>
                </View> : null}
              {info.instagram ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.INSTAGRAM_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://instagram.com/${info.instagram}`}>Instagram</Anchor>
                </View> : null}
              {info.snapchat ? 
                <View style={styles.iconRow}>
                  <Image style={styles.icon} source={{uri: icons.SNAPCHAT_ICON}} />
                  <Anchor style={styles.detailInfo} href={`http://snapchat.com/add/${info.snapchat}`}>Snapchat</Anchor>
                </View> : null}
              
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  qrScanner: {
    width: 300,
    height: 300,
  },
  detailInfo: {
    margin: 10
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 30,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
};


export default DetailModal;