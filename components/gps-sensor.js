import React from 'react';
import { Platform } from 'react-native';
import { Constants, Location } from 'expo';

import * as actions from "../store/actions.js";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    updateLocation: (payload) => {
      return dispatch(actions.updateLocation(payload));
    },
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
    }, 750);
  }

  _handlePositionData(location){
    let { latitude, longitude } = location.coords;
    
    let newLocation = {
      latitude: latitude,
      longitude: longitude,
      time: Date.now(),
    }

    console.log(`newLocation: `, newLocation);

    this.props.saveLoc(newLocation);
  }
// location:  Object {
//   "coords": Object {
//     "accuracy": 17.198999404907227,
//     "altitude": 108.19999694824219,
//     "heading": 0,
//     "latitude": 47.6318776,
//     "longitude": -122.3564953,
//     "speed": 0,
//   },
//   "mocked": false,
//   "timestamp": 1551362931795,
// }
  render() {
    // let { timestamp } = this.props.lastLocation;
    // let { heading, speed, longitude, latitude } = this.props.lastLocation.coords;
    // let text = 'Waiting on location..';
    // if (this.state.errorMessage) {
    //   text = this.state.errorMessage;
    // } else if (this.props.lastLocation) {
    //   text = JSON.stringify(this.props.lastLocation);
    // }

    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPSSensor)
