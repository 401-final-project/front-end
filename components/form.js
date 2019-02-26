import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({  Name: t.String,
  email: t.String,
  LinkedIn: t.String,
  Twitter: t.String,
});

const Setup = props => {
  return (
    <View>
      <Form 
        ref={c => this._form = c} 
        type={User}
        value={value} 
      />
      <Button 
        title="Create QR Code!"
        onPress={props.update}
      />
    </View>
    );
  }

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

const mapDispatchToProps = (dispatch, getState) => ({
  update: () => dispatch(actions.update()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setup);


