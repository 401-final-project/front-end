import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({  Name: t.String,
  email: t.String,
  LinkedIn: t.String,
  Twitter: t.String,
});

export default class Setup extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: {},
    };
  }

  handleSubmit = () => {
    const value = this._form.getValue(); 
    console.log(value);
    this.setState({value: value});
  }

  render() {
    const { value } = this.state;

    return (
      <View>
        <Form 
          ref={c => this._form = c} 
          type={User}
          value={value} 
        />
        <Button 
          title="Create QR Code!"
          onPress={this.handleSubmit}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});



