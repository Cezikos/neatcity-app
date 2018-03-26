// @flow
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import NcText from '../nc-text/nc-text';
import styles from './styles';
import STRINGS from '../../values/strings';


type Props = {
  name: string,
  onPress: Function
};

const CityChooser = (props : Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View >
      <NcText style={styles.cityText}>{props.name}</NcText>
      <NcText style={styles.actionText}>({STRINGS.ACTION.CHANGE})</NcText>
    </View>
  </TouchableOpacity>
);

export default CityChooser;
