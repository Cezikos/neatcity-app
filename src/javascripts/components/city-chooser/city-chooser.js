// @flow
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import NcText from '../nc-text/nc-text';
import styles from './styles';
import STRINGS from '../../values/strings';


type Props = {
  name: string
};

const CityChooser = (props : Props) => (
    <View>
      <NcText style={styles.cityText}>{props.name}</NcText>
      <NcText style={styles.actionText}>({STRINGS.ACTION.CHANGE})</NcText>
    </View>
);

export default CityChooser;
