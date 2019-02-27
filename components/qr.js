import React from "react";
import { View, Button } from 'react-native';
import QRCode from "react-qr-code";

class QR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Click 'Change QR Code' and visit Ryans Linked In"
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ text: "linkedin.com/in/ryangallaway" });
  };

  render() {
    return (
      <View>
        <QRCode value={this.state.text} />
        <Button
          onPress={this.handleClick}
          title="Change QR Code"
        />
      </View>
    );
  }
}

export default QR;
