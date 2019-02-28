
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , TouchableOpacity} from 'react-native';
// import { Switch } from 'react-native-switch'
import { connect } from 'react-redux';

import ShareButton from '../components/share-button.js';
import * as actions from '../store/actions.js';
import * as icons from '../assets/util.js';

const mapStateToProps = (state) => {
  return({
    userInfo: state.userInfo,
    socialSelect: state.socialSelect,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    update: (payload) => {
      return dispatch(actions.updateShareSelector(payload));
    },
  });
};

class ShareSelector extends React.Component {

  handleSwitch = (checkboxName) => {
    if(this.props.socialSelect[checkboxName]){
      this.props.update({checkboxName: checkboxName, status: false});
    } else {
      this.props.update({checkboxName: checkboxName, status: true});
    }
  }

  render() {
    return (
      <ScrollView>
        {
          BUTTONS.map( (category, index) => {
            let userHas = this.props.userInfo[category.name];
            if(userHas){
              return (
                  <ShareButton
                    key={index}
                    iconSrc={{ uri: category.uri }}
                    onPress={() => {this.handleSwitch(category.name)}}
                    checked={this.props.socialSelect[category.name]}
                  >{category.text}</ShareButton>
              );
            }
          })
        }
      </ScrollView>
    )
  }
}

const BUTTONS = [
  { uri: icons.PHONE_ICON,
    name: 'phone',
    text: "Phone",},
  { uri: icons.EMAIL_ICON,
    name: 'email',
    text: "email",},
  { uri: icons.LINKEDIN_ICON,
    name: 'linkedin',
    text: "Linkedin",},
  { uri: icons.PINTEREST_ICON,
    name: 'pinterest',
    text: "Pinterest",},
  { uri: icons.TWITTER_ICON,
    name: 'twitter',
    text: "Twitter",},
  { uri: icons.FACEBOOK_ICON,
    name: 'facebook',
    text: "Facebook",},
  { uri: icons.GITHUB_ICON,
    name: 'github',
    text: "github",},
  { uri: icons.INSTAGRAM_ICON,
    name: 'instagram',
    text: "Instagram",},
  { uri: icons.SNAPCHAT_ICON,
    name: 'snapchat',
    text: "Snapchat",},
 ];

export default connect( mapStateToProps, mapDispatchToProps)(ShareSelector);
