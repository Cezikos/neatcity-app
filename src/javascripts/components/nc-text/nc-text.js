// @flow
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import styles from './styles';


type Props = {
  style?: Object | Array<Object | null>,
  onPress?: Function,
  children: React.Node,
};

const NcText = (props : Props) => (
  <Text onPress={props.onPress} style={StyleSheet.flatten([props.style, styles.ncText])}>{props.children}</Text>
);

export default NcText
