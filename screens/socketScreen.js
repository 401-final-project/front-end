/*
credit for this ingenuitiy goes here:
https://github.com/expo/examples/blob/master/with-socket-io/app/App.js
*/

import React from 'react';
import {connect} from 'react-redux'
import { Icon } from 'expo';
import { StyleSheet, Text, View, ScrollView, Button , Switch , TouchableOpacity} from 'react-native';
import ShareSelector from '../components/share-selector.js';
const io = require('socket.io-client');
import Subscriber from '../lib/subscriber.js';
import * as actions from '../store/actions.js';

const SocketEndpoint = 'https://fl-401-final-back-end-q.herokuapp.com';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMyContacts: (contact) => dispatch(actions.updateMyContacts(contact)),
  }
}

class Socket extends React.Component {

  friendIds = () => {
    if (!this.props.state) {return []}
    
    return this.props.state.contacts.map(c => c.userId).filter(c => c)
  }

  componentDidMount() {
    const subscriber = new Subscriber('users');

    const contactIds = this.friendIds()
    // console.log({contactIds})

    contactIds.forEach(contactId => {
      subscriber.subscribe(contactId, (payload) => {
        // console.log('received new data for user 🍆🍆🍆🍆🍆🍆🍆', contactId, payload);
        this.updateContactLocation(payload);
      })
    })
  }

  updateContactLocation = (contact) => {
    this.props.updateMyContacts(contact);
  }

  calcDistanceToUser = (locationA, locationB) => {
    if (!locationA || !locationB || !locationA.latitude || !locationA.longitude || 
      !locationB.latitude || !locationB.longitude) {
        return null
      }


    let deltaLatitude = locationA.latitude - locationB.latitude;
    let deltaLongitude = locationA.longitude - locationB.longitude;
    let aSqr = deltaLatitude * deltaLatitude;
    let bSqr = deltaLongitude * deltaLongitude;
    let cSqr = aSqr + bSqr;
    let c = Math.sqrt(cSqr);
    let distanceInFeet = c*20902230.971129;
    return distanceInFeet;
  }


  onlineIndicator(contact) {
    let online = false
    
      if (contact && contact.location && contact.location.time) {
        online = Date.now() - contact.location.time < 30000
      }

      return <Icon.Ionicons
        name='md-checkmark-circle'
        size={26}
        style={{ marginBottom: -3, marginTop: 10 }}
        color={online ? '#44AA44' : '#AAAAAA'}
      />
  }

lastSeenAt(contact) {
  if (!contact || !contact.location || !contact.location.time) {
    return null
  }

  return `Last seen at ${new Date(contact.location.time).toLocaleString()}`
}

  renderContact = (contact) => {
    const distance = this.calcDistanceToUser(contact.location, this.props.state.location)

    // console.log(distance)

    return (<View>
      <Text>{this.onlineIndicator(contact)}</Text>
      <Text>{contact.name}</Text>
      <Text>{distance !== null ? `${distance} ft away` : ''}</Text>
      <Text>{this.lastSeenAt(contact)}</Text>
    </View>)
  }
  

  renderNearby = () => {
    // console.log("Rendering nearby users")
    return <View>
        {this.props.state.contacts && this.props.state.contacts.map((e,i) => 
          <View key={i}>
            {this.renderContact(e)}
          </View>)}
      </View>

    
    // return (
    //   <View>
    //     {
    //       this.props &&
    //       this.props.state &&
    //       this.props.state.contacts &&
    //       this.props.state.contacts.map((contact,i) => {
    //         return (
    //           <View>
    //             <Text>test</Text>
    //           </View>
    //         )
    //       })
    //     }
    //   </View>
    // )
  }

  render (){
    return (
      <View>
        {this.renderNearby()}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket);


              // <Text>{this.calcDistanceToUser(this.props.state.location, contact.location)} ft</Text>
