import React from "react";
import { View, Button } from 'react-native';
import QRCode from "react-qr-code";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo,
    socialSelect: state.socialSelect,
  });
};

class QR extends React.Component {
  render() {
    return (
      <View>
        <QRCode value={JSON.stringify(this.props.userInfo ? this.props.userInfo : null)} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(QR);