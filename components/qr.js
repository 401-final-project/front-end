import React from "react";
import { View, Button } from 'react-native';
import QRCode from "react-qr-code";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo
  });
};

class QR extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: "Click 'Change QR Code' and visit Ryans Linked In"
  //   };
  // }

  // handleClick = e => {
  //   e.preventDefault();
  //   this.setState({ text: "linkedin.com/in/ryangallaway" });
  // };

  render() {
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