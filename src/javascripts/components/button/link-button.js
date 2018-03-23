// @flow
import * as React from 'react';
import { TouchableHighlight, View } from 'react-native';

import NcText from '../nc-text/nc-text';
import styles from './styles';
import COLORS from '../../styles/colors';


type Props = {
  onPress: Function,
  icon?: React.Node,
  customStyles?: Array<Object> | Object,
  text: string
};

const LinkButton = (props : Props) => {
  const withIconStyle = props.icon ? styles.withIcon : null

  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={COLORS.ALTO}
      style={[].concat(styles.linkContainer, props.customStyles)}>
        <View style={styles.inlineFlex}>
          {props.icon}
          <NcText style={[styles.linkText, withIconStyle]}>
            {props.text}
          </NcText>
        </View>
    </TouchableHighlight>
  );

};

export default LinkButton;
