// @flow
import React from 'react';
import { View } from 'react-native';

import NcModal from './nc-modal';
import NcText from '../nc-text/nc-text';
import styles from './styles';
import CONSTANTS from '../../redux/constants/modal';
import STRINGS from '../../values/strings';


type Props = {};

class ReputationHintModal extends React.Component<Props> {
  render() {
    return (
      <NcModal
        name={CONSTANTS.MODALS.REPUTATION_HINT}
        style={styles.alignCenter}
        titleStyle={styles.textCenter}
        title={STRINGS.HEADLINE.WHAT_IS_REPUTATION}>
        <NcText>
          {STRINGS.HINT.REPUTATION_IS_A_SCORING}
        </NcText>
      </NcModal>
    );
  }
}

export default ReputationHintModal;
