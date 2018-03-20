// @flow
import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';


type Props = {
  multiline?: Boolean
};

const NcTextInput = (props : Props) => {
  return (
    <TextInput
      multiline={!!props.multiline}
      style={styles.textInput}
      underlineColorAndroid="transparent" />
  );
}

export default NcTextInput;
