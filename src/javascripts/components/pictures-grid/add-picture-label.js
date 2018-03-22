// @flow
import React from 'react'
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import COLORS from '../../styles/colors';


type Props = {
  onPress: Function
};

const AddPictureLabel = (props : Props) => {
  return (
    <TouchableHighlight
      style={styles.addPictureLabel}
      onPress={props.onPress}
      underlayColor={COLORS.ALTO}>
      <View>
        <Icon name="add-to-photos" size={30} color={COLORS.SILVER} />
      </View>
    </TouchableHighlight>
  );
}

export default AddPictureLabel;
