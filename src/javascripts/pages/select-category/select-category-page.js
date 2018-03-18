// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PrimaryButtonSmall from '../../components/button/primary-button-small';
import BackgroundImage from '../../components/background-image/background-image';
import CityChooser from '../../components/city-chooser/city-chooser';
import NcText from '../../components/nc-text/nc-text';
import COLORS from '../../styles/colors';
import SPACINGS from  '../../styles/spacings';
import styles from  './styles';

type Props = {};

export default class SelectCategoryPage extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  _onPress = () => {}

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage source={require('../../../assets/images/backgrounds/lodz.jpg')} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Image
              source={require('../../../assets/images/logos/logo.png')}
              resizeMode="center"
              style={styles.logo} />
          </View>

          <View style={styles.contentWrapper}>
            <NcText style={styles.headline}>Wybierz kategorię zgłoszenia:</NcText>
            <View style={styles.navigationWrapper}>
              <PrimaryButtonSmall
                onPress={this._onPress}
                text="Zniszczona zieleń" />
              <PrimaryButtonSmall
                customStyles={SPACINGS.BUTTON_SPACING}
                onPress={this._onPress}
                text="Porzucone wraki" />
              <PrimaryButtonSmall
                customStyles={SPACINGS.BUTTON_SPACING}
                onPress={this._onPress}
                text="Infrastruktura drogowa" />
              <PrimaryButtonSmall
                customStyles={SPACINGS.BUTTON_SPACING}
                onPress={this._onPress}
                text="Niepoprawne oznakowanie" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
