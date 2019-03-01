import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import DetailModal from "./detailsModal.js";

const mapStateToProps = state => {
  return ({
    contacts: state.contacts,

  });
};


class ContactList extends React.Component{
  state = {
    selectedUser: {

    }
  }

  render() {
    return (
        <View style={styles.list}>
          {
            this.props.contacts && this.props.contacts.map( (contact,i) =>
            <DetailModal
              style={styles.name}
              information={contact}
              key={i}>{contact.name}
            </DetailModal>
            )
          }
        </View>
    )
  }
}

const styles = {
  list: {
    margin: 30,
  },
  name: {
    margin: 10,
  }
}

export default connect(mapStateToProps)(ContactList);
