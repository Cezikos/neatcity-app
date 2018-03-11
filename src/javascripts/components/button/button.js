import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';


const Button = (props) => (
  <TouchableHighlight onPress={props.onPress} underlayColor={'transparent'}>
    <Text style={styles[props.customStyle]}>{props.text}</Text>
  </TouchableHighlight>
);

export default Button;
