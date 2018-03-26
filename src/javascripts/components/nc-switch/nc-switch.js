// @flow
import React from 'react';
import { Switch } from 'react-native';

import COLORS from '../../styles/colors';


type Props = {
  value: boolean
};

const NcSwitch = (props : Props) => {
  return (
    <Switch value={props.value} thumbTintColor={COLORS.ALTO} onTintColor={COLORS.CHAMBRAY} />
  );
}

export default NcSwitch;
