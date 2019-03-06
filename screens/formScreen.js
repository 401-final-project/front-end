import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Placeholders from '../components/urlComments.js';

import * as actions from '../store/actions';

import t from 'tcomb-form-native';
import 'console';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  company: t.String,
  jobTitle: t.String,
  phone: t.Number,
  email: t.String,
  linkedin: t.String, 
  pinterest: t.String,
  twitter: t.String,
  facebook: t.String,
  github: t.String,
  instagram: t.String,
  snapchat: t.String,
  ravelry: t.String,
});


const mapStateToProps = state => {
  return ({
    userInfo: state.userInfo
  });
};

const mapDispatchToProps = (dispatch) => {
  // console.log(actions);
  return ({
    updateUserInfo: (payload) => {
      return dispatch(actions.updateUserInfo(payload))
    },
    // retrievedLocalStorage: (payload) => {
    //   return dispatch(actions.retrievedLocalStorage(payload))
    // },
  });
};

class ProfileForm extends React.Component {
  state = {
    formData: this.props.userInfo
  }

  handleInfoSubmit = () => {
    this.props.updateUserInfo(this.state.formData);
    
  }

  handleCancel = () => {
    this.setState({formData: this.props.userInfo});
    // console.log(this.props.state);
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
  //   else {
  //     console.log("no data found");
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Enter your info below:</Text>
          <Form 
            ref={c => this._form = c} 
            type={User}
            value={this.state.formData}
            options={Placeholders}
            onChange={this.onChange}
          />
          <TouchableOpacity
            onPress={this.handleInfoSubmit}
          >
            <Text
              title="Save My Info"
              style={styles.button}
            > 
            Save My Info
            </Text>
          </TouchableOpacity>
          <Button
            title="Cancel"
            onPress={this.handleCancel}
            color={'#1496bb'}
          />
          <Text style={styles.filler}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#f2f3f4' //lilla grey
  },
  header: {
    color: '#107896',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 12,
  },
  form: {
    padding: 24,
  },
  button: {
    backgroundColor: '#107896', //darkest alice blue
    borderColor: '#c1c7c9', //heather grey 
    borderWidth: 2,
    borderRadius: 12,
    color: '#f2f3f4', //lilla grey
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  filler: {
    paddingBottom: 30,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);