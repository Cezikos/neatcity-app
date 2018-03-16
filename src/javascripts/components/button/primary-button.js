// @flow
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

import styles from './styles';
import COLORS from '../../styles/colors';


type Props = {
  onPress: Function,
  icon?: any,
  customStyles?: Array<Object>,
  text: string
};

const PrimaryButton = (props : Props) => {
  const withIconStyle = props.icon ? styles.withIcon : null

  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={COLORS.SAN_MARINO}
      style={[].concat(styles.primaryContainer, props.customStyles)}>
        <View style={styles.inlineFlex}>
          {props.icon}
          <Text style={[styles.primarayText, withIconStyle]}>{props.text}</Text>
        </View>
    </TouchableHighlight>
  );

};

export default PrimaryButton;
