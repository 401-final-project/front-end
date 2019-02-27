import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';

import ShareButton from '../components/share-button.js';
import * as actions from '../store/actions.js';
import * as icons from '../assets/util.js';




const mapDispatchToProps = (dispatch) => {
  return ({
    update: (payload) => {
      return dispatch(actions.updateShareSelector(payload));
    },
  });
};

class ShareSelector extends React.Component {
  state = {
    phoneCheckbox: false,
    emailCheckbox: false,
    linkedinCheckbox: false,
    pinterestCheckbox: false,
    twitterCheckbox: false,
    facebookCheckbox: false,
    githubCheckbox: false,
    instagramCheckbox: false,
    snapchatCheckbox: false,
  }

  handleCheckBox = (checkboxName) => {
    let newState = {...this.state};
    
    if(this.state[checkboxName]){
      newState[checkboxName] = false;
    } else {
      newState[checkboxName] = true;
    }
    this.setState(newState);

    this.props.update(this.state);
  }

  render() {
    return (
      <ScrollView>
        {
          BUTTONS.map( (category, index) => {
            return (
                <ShareButton
                  key={index}
                  iconSrc={{ uri: category.uri }}
                  onPress={() => {this.handleCheckBox(category.name)}}
                  checked={this.state[category.name]}
                >{category.text}</ShareButton>
            );
          })
        }
      </ScrollView>
    )
  }
}
const BUTTONS = [
  { uri: icons.PHONE_ICON,
    dataName: 'phone',
    name: 'phoneCheckbox',
    text: "Phone",},
  { uri: icons.EMAIL_ICON,
    dataName: 'email',
    name: 'emailCheckbox',
    text: "email",},
  { uri: icons.LINKEDIN_ICON,
    dataName: 'linkedin',
    name: 'linkedinCheckbox',
    text: "Linkedin",},
  { uri: icons.PINTEREST_ICON,
    dataName: 'pinterest',
    name: 'pinterestCheckbox',
    text: "Pinterest",},
  { uri: icons.TWITTER_ICON,
    dataName: 'twitter',
    name: 'twitterCheckbox',
    text: "Twitter",},
  { uri: icons.FACEBOOK_ICON,
    dataName: 'facebook',
    name: 'facebookCheckbox',
    text: "Facebook",},
  { uri: icons.GITHUB_ICON,
    dataName: 'github',
    name: 'githubCheckbox',
    text: "github",},
  { uri: icons.INSTAGRAM_ICON,
    dataName: 'instagram',
    name: 'instagramCheckbox',
    text: "Instagram",},
  { uri: icons.SNAPCHAT_ICON,
    dataName: 'snapchat',
    name: 'snapchatCheckbox',
    text: "Snapchat",},
 ];

export default connect( undefined, mapDispatchToProps)(ShareSelector);

