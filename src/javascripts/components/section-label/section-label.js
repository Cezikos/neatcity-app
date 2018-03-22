// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';

import NcText from '../nc-text/nc-text'
import styles from './styles';


type Props = {
  children: React.Node,
  style?: Object
};

const SectionLabel = (props : Props) => {
  return (
    <NcText style={StyleSheet.flatten([props.style, styles.sectionLabel])}>
      {props.children}
    </NcText>
  );
}

export default SectionLabel;
