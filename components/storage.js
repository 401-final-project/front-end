import React from 'react';
import { AsyncStorage, View, Button } from "react-native"
// import * as Expo from 'expo';


class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      contact01_object : {
        [Expo.Contacts.Fields.FirstName]: "A-Firsty",
        [Expo.Contacts.Fields.LastName]: "A-Lasty",
        [Expo.Contacts.Fields.Company]: "Test Company",
        [Expo.Contacts.Fields.PhoneNumbers]: [
          {
            countryCode: "us",
            digits: "5553334444",
            id: "",
            label: "home",
            number: "(555) 333-4444"
          }
        ],
        [Expo.Contacts.EMAILS]: [
          {
            email: "jaredpattison@gmail.com",
            id: "",
            label: "home"
          }
        ],
        [Expo.Contacts.URLS]: [
          {
            id: "",
            label: "github",
            url: "github.com/jaredpattison"
          },
          {
            id: "",
            label: "linkedin",
            url: "linkedin.com/in/jaredpattison"
          }
        ]
      }
    };
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('contact01', JSON.stringify(this.state));
    } catch(error) {
      console.error(error);
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('contact01');
      if (value !== null) {
        console.log(value);
      }
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View>
        <Button
          onPress={this._storeData}
          title="store it"
        />
                <Button
          onPress={this._retrieveData}
          title="retrieve it"
        />
      </View>
    );
  }
}

export default Storage;





