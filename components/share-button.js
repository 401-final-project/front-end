import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Switch } from 'react-native-switch';

const styles = StyleSheet.create({
  buttonText: {
    color: '#2c2c2c',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 30,
  },
});

// const ShareButton = ({ buttonStyle, onPress, iconSrc, textStyle, children  }) => (
const ShareButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.button, props.buttonStyle]} >
      <Switch value={props.checked} onPress={props.onPress}/>
      <Image style={styles.icon} source={props.iconSrc} />
      <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default ShareButton;