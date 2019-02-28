import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../store/actions.js';

const mapDispatchToProps = (dispatch) => {
  return ({
    newContactScan: (payload) => {
      return dispatch(actions.newContactScan(payload));
    },
  });
};

const mapStateToProps = state => {
  return ({
    contacts: state.contacts,
  });
};

class Scanner extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    let userData = data.data;
    let userDataString = userData.toString();
    let userDataParsed = JSON.parse(userDataString);

    if( !userAlreadyExists(userDataParsed, this.props.contacts) ){
      this.props.newContactScan(userDataParsed);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={styles.barCodeScanner}
            />
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  barCodeScanner: {
    width: 300,
    height: 300,
  }
});

const userAlreadyExists = (newUser, contacts) => {
  for( let i = 0; i < contacts.length; i++){
    let matches = compareTwoPeople(newUser, contacts[i]);
    if(matches) {
      return true;
    }
  }
  return false;
}

const compareTwoPeople = (personA, personB) => {
  for( let field in personA){
    if(personA[field] !== personB[field]){
      return false;
    }
  }
  return true;
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);