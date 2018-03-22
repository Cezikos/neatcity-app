// @flow
import * as React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';


type Props = {
  source?: Object,
  children?: React.Node
};

const ImageContainer = (props : Props) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={props.source}
        resizeMode="cover" />
        {props.children}
    </View>
  );
}

export default ImageContainer;
