import React from "react";
import { View, Button } from 'react-native';
import QRCode from "react-qr-code";
import { connect } from 'react-redux';

// state = {
//   phoneCheckbox: false,
//   emailCheckbox: false,
//   linkedinCheckbox: false,
//   pinterestCheckbox: false,
//   twitterCheckbox: false,
//   facebookCheckbox: false,
//   githubCheckbox: false,
//   instagramCheckbox: false,
//   snapchatCheckbox: false,
// }

const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo,
    socialSelect: state.socialSelect,
  });
};

  class QR extends React.Component {

  generateQRCodeData = () =>{
    let data = {};

    for( let key in this.props.userInfo){
      if(this.props.socialSelect[key]){
        data[key] = this.props.userInfo[key];
      }
    }

    return data;
  }
  
  render() {
    let data = this.generateQRCodeData() ? this.generateQRCodeData() : null;
    return (
      <View>
        {/* <QRCode value={JSON.stringify(this.props.userInfo ? this.props.userInfo : null)} /> */}
        <QRCode value={JSON.stringify(data)} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(QR);