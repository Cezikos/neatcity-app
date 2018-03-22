// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import styles from './styles';


type Props = {
  children: React.Node,
  style: Object
};

const PicturesGrid = (props : Props) => {
  return (
    <View style={StyleSheet.flatten([props.style, styles.picturesGrid])}>
      {props.children}
    </View>
  );
}

export default PicturesGrid;
