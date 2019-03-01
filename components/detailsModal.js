import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, TouchableOpacity, Linking, View, ScrollView, Alert, Image, Button } from 'react-native';

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
    return (
      <ScrollView style={{marginTop: 22}}>
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
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={styles.detailInfo}>{info.name ? `Name: ${info.name}` : null}</Text>
              <Text style={styles.detailInfo}>{info.phone ? `Phone: ${info.phone}` : null}</Text>
              <Text style={styles.detailInfo}>{info.email ? `Email: ${info.email}` : null}</Text>
              {info.linkedin ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://linkedin.com/in/${info.linkedin}`}>
                    <Image style={styles.icon} source={{uri: icons.LINKEDIN_ICON}} />
                    Linkedin
                  </Anchor>
                </View> : null}
              {info.pinterest ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://pinterest.com/${info.pinterest}`}>
                    <Image style={styles.icon} source={{uri: icons.PINTEREST_ICON}} />
                    Pinterest
                  </Anchor>
                </View> : null}
              {info.twitter ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://twitter.com/${info.twitter}`}>
                    <Image style={styles.icon} source={{uri: icons.TWITTER_ICON}} />
                    Twitter
                  </Anchor>
                </View> : null}
              {info.facebook ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://facebook.com/${info.facebook}`}>
                    <Image style={styles.icon} source={{uri: icons.FACEBOOK_ICON}} />
                    Facebook
                  </Anchor>
                </View> : null}
              {info.github ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://github.com/${info.github}`}>
                    <Image style={styles.icon} source={{uri: icons.GITHUB_ICON}} />
                    Github
                  </Anchor>
                </View> : null}
              {info.instagram ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://instagram.com/${info.instagram}`}>
                    <Image style={styles.icon} source={{uri: icons.INSTAGRAM_ICON}} />
                    Instagram
                  </Anchor>
                </View> : null}
              {info.snapchat ? 
                <View style={styles.iconRow}>
                  <Anchor style={styles.detailInfo} href={`http://snapchat.com/add/${info.snapchat}`}>
                    <Image style={styles.icon} source={{uri: icons.SNAPCHAT_ICON}} />
                    Snapchat
                  </Anchor>
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
      </ScrollView>
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
    height: 40,
    margin: 0,
    marginLeft: 20,
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 100,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

};

export default DetailModal;