// @flow
import * as React from 'react';
import { Text } from 'react-native';

import styles from './styles';


type Props = {
  style: Object,
  children: React.Node
};

const NcText = (props : Props) => (
  <Text style={[props.style, styles]}>{props.children}</Text>
);

export default NcText
