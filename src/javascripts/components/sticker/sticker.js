// @flow
import React from 'react';

import NcText from '../../components/nc-text/nc-text';
import styles from './styles';


type Props = {
  name: string
};

const Sticker = (props : Props) => {
  return (
    <NcText style={styles.sticker}>{props.name}</NcText>
  );
}

export default Sticker;
