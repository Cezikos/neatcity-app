import React from 'react';
import { View, Linking } from 'react-native';

import NcModal from './nc-modal';
import NcText from '../nc-text/nc-text';
import LinkButton from '../button/link-button';
import styles from './styles';
import CONSTANTS from '../../redux/constants/modal';
import STRINGS from '../../values/strings';


class ChooseCityModal extends React.Component {
  _redirect() {
    Linking.openURL('https://cursordisco.com/')
      .catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <NcModal
        name={CONSTANTS.MODALS.CHOOSE_CITY}
        style={styles.alignCenter}
        titleStyle={styles.textCenter}
        title="Wybierz miasto">
        <NcText style={styles.textCenter}>
          {STRINGS.HINT.FOR_NOW_ONLY_ONE_CITY_IS_AVAILABLE}
        </NcText>

        <View style={styles.chooseCityFooter}>
          <LinkButton style={{alignSelf: 'center'}} onPress={this._redirect} gray={true}
            text={STRINGS.HINT.SEE_HOW} />
        </View>
      </NcModal>
    );
  }
}

export default ChooseCityModal;