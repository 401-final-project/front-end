import React from 'react';
import { Platform } from 'react-native';
import { Constants, Location } from 'expo';

import * as actions from "../store/actions.js";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    updateUserData: (state) => dispatch(actions.updateRemoteUserInfo(state)),
    updateLocation: (payload) => dispatch(actions.updateLocation(payload)),
  });
}

const mapStateToProps = (store) => {
  return ({
    state: store,
  });
}

class GPSSensor extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentDidMount = () => {
    // console.log('moooounting')
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._registerLocationGetter();
    }
  }

  _registerLocationGetter = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let options = {
      accuracy: 5,
      showsBackgroundLocationIndicator: true,
      timeInterval: 16,
    };
    this._locationGetter();
  }

  _locationGetter = () => {
    setInterval( async () => {
      let location = await Location.getCurrentPositionAsync({});
      this._handlePositionData( location );
    }, 7500);
  }

  _handlePositionData(location){
    let { latitude, longitude } = location.coords;
    
    let newLocation = {
      latitude: latitude,
      longitude: longitude,
      time: Date.now(),
    }

    // console.log(`newLocation: `, newLocation);

    const newState = {
      ...this.props.state,
      location: newLocation,
    };

    this.props.updateUserData(newState)
    this.props.updateLocation(newLocation);
  }

  render() {
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSSensor)
