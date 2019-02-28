import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import t from 'tcomb-form-native';
import 'console';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  phone: t.Number,
  email: t.String,
  linkedIn: t.String, 
  pinterest: t.String,
  twitter: t.String,
  facebook: t.String,
  github: t.String,
  instagram: t.String,
  snapchat: t.String,
});

const Placeholders = {
  fields: {
    linkedIn: {
      placeholder: 'username',
      help: 'linkedin/in/username'
    },
    pinterest: {
      placeholder: 'username',
      help: 'pinterest.com/username'
    },
    twitter: {
      placeholder: 'username',
      help: 'twitter.com/username'
    },
    facebook: {
      placeholder: 'username',
      help: 'facebook.com/username'
    },
    github: {
      placeholder: 'username',
      help: 'github.com/username'
    },
    instagram: {
      placeholder: 'username',
      help: 'instagram.com/username'
    },
    snapchat: {
      placeholder: 'username',
      help: 'snapchat.com/add/username' 
    }
  }
};

const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo
  });
};

const mapDispatchToProps = (dispatch) => {
  console.log(actions);
  return ({
    updateUserInfo: (payload) => {
      return dispatch(actions.updateUserInfo(payload))
    },
    retrievedLocalStorage: (payload) => {
      return dispatch(actions.retrievedLocalStorage(payload))
    },
  });
};

class ProfileForm extends React.Component {
  state = {}

  handleInfoSubmit = () => {
    this.props.updateUserInfo(this.state.formData);
  }

  handleCancel = () => {
    // this.setState({formData: this.props.userInfo});
    console.log(this.props.state);
  }

  onChange = (formData) => {
    this.setState({formData});
  }
  
  // async componentDidMount() {

  //   const retrievedData = await AsyncStorage.getItem('user');
  //   console.log("fetched data:", retrievedData);
  //   if(retrievedData !== null) {
  //     this.props.retrievedLocalStorage(retrievedData);
  //   } 
  //   // else {
  //   //   console.log("no data found");
  //   // }
  // }

  render() {
    return (
      <ScrollView style={styles.form}>
        <Text>Enter your info below:</Text>
        <Form 
          // ref={c => this._form = c} 
          ref="form"
          type={User}
          value={this.state.formData}
          options={Placeholders}
          onChange={this.onChange}
        />
        <Button 
          title="Save My Info"
          onPress={this.handleInfoSubmit}
        />
        <Button 
          title="Cancel"
          onPress={this.handleCancel}
        />
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  form: {
    margin: 20,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);
