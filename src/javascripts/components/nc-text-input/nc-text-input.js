// @flow
import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';


type Props = {
  multiline?: boolean,
  secureTextEntry?: boolean
};

const NcTextInput = (props : Props) => {
  return (
    <TextInput
      multiline={props.multiline}
      secureTextEntry={props.secureTextEntry}
      style={styles.textInput}
      underlineColorAndroid="transparent" />
  );
}

export default NcTextInput;
