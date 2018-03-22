import * as React from 'react';

import NcText from '../nc-text/nc-text'
import styles from './styles';


type Props = {
  children: React.Node,
  style?: Object
};

const Headline = (props : Props) => {
  return (
    <NcText style={styles.headline}>
      {props.children}
    </NcText>
  );
}

export default Headline;
