// @flow
import React from 'react';
import { StyleSheet } from 'react-native';

import NcText from '../nc-text/nc-text';
import styles from './styles';


type Props = {
  onPress: Function,
  style: Object | Array<Object>
};

const NcHint = (props : Props) => {
  return (
    <NcText
      onPress={props.onPress}
      style={StyleSheet.flatten([props.style, styles.ncHint])}>
      ?
    </NcText>
  );
}

export default NcHint;
