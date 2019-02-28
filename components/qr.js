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
    // console.log(`🍕`, this.props);
    // console.log(`🍕`, this.props.userInfo);
    // console.log(`🍕`, JSON.stringify(this.props.userInfo));
    return (
      <View>
        <QRCode value={JSON.stringify(this.props.userInfo)} />
        {/* <Button
          onPress={this.handleClick}
          title="Change QR Code"
        /> */}
      </View>
    );
  }
}

export default connect(mapStateToProps)(QR);