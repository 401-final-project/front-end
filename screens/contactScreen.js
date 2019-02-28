import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import * as Expo from 'expo';

import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../store';




const mapStateToProps = state => {
  return ({
    state: state
  });
};

class UserContacts extends React.Component{
  render(){
    console.log(this.props.state.userInfo.name);
    return (
      <Provider store={store}>
      <FlatList
        data={[{key: 'Ryan'}, {key: 'Fletcher'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      </Provider>
    )
  }

}

export default connect(mapStateToProps)(UserContacts);