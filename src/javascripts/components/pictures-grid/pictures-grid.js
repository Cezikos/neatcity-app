// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

import styles from './styles';


type Props = {
  children: any
};

const PicturesGrid = (props : Props) => {
  return (
    <View style={StyleSheet.flatten([props.style, styles.picturesGrid])}>
      {props.children}
    </View>
  );
}

export default PicturesGrid;
