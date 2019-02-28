import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Switch } from 'react-native-switch';

const ShareButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
          <Switch
            value={props.checked}
            onValueChange={props.onPress} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
        <Image style={styles.icon} source={props.iconSrc} />
        <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default ShareButton;

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