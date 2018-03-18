// @flow
import React from 'react';
import { Image } from 'react-native';
import styles from './styles';


type Props = {
  source: number
};

const BackgroundImage = (props : Props) => (
  <Image
    source={props.source}
    resizeMode="cover"
    style={styles.image}/>
);

export default BackgroundImage;
