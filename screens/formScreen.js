import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  phone: t.String,
  email: t.String,
  linkedIn: t.String,
  pinterest: t.String,
  twitter: t.String,
  facebook: t.String,
  tiktok: t.String,
  instagram: t.String,
  snapchat: t.String,
});

const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo
  });
};

const mapDispatchToProps = (dispatch) => {
  // console.log(`in MDTP`);
  return ({
    updateUserInfo: () => dispatch(actions.updateUserInfo()),
  })
};

class ProfileForm extends React.Component {
  state = {

  }
      //   <Text>hello</Text>

  handleInfoSubmit = () => {
    console.log('test');
    this.setState({formData});
  }
  
  onChange = (formData) => {
    console.log(`change detected 🐤`, formData);
    // this.setState({formData});
    // TODO: emit a redux action
    // something like this ? updateUserInfo(formData) ???
  }
  
  render() {
    return (
      <View style={styles.form}>
        <Text>Enter your info below:</Text>
        <Form 
          // ref={c => this._form = c} 
          ref="form"
          type={User}
          onChange={this.onChange}
        />
        <Button 
          title="Save My Info"
          onPress={this.handleInfoSubmit}
        />
      </View>
    );
  }
}

const styles = {
  form: {
    margin: 20,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);
