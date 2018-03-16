// @flow
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';


type Props = {
  style: Object,
  children: any
};

const NcText = (props : Props) => (
  <Text style={[props.style, styles]}>{props.children}</Text>
);

export default NcText
