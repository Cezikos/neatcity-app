// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import NcText from '../nc-text/nc-text'
import styles from './styles';


type Props = {
  children: React.Node,
  style?: Object,
  iconAfter?: React.Node
};

const SectionLabel = (props : Props) => {
  return (
    <View style={StyleSheet.flatten([styles.sectionLabel, props.style])}>
      <NcText>
        {props.children}
      </NcText>
      {props.iconAfter}
    </View>
  );
}

export default SectionLabel;
