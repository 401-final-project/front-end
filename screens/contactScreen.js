import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, Button } from 'react-native';
import * as Expo from 'expo';

import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../store';

const mapStateToProps = state => {
  return ({
    contacts: state.contacts,

  });
};


class UserContacts extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <ScrollView>
  
        <View>
          {
            this.props.contacts && this.props.contacts.map( (contact,i) =>
              <Text key={i}>{contact.name}</Text>
            )
          }
        </View>

      </ScrollView>
      </Provider>
    )
  }
}

export default connect(mapStateToProps)(UserContacts); 