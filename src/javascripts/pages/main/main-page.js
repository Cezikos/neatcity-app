// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PrimaryButton from '../../components/button/primary-button';
import BackgroundImage from '../../components/background-image/background-image';
import CityChooser from '../../components/city-chooser/city-chooser';
import COLORS from '../../styles/colors';
import SPACINGS from  '../../styles/spacings';
import styles from  './styles';


type Props = {
  navigation: Function
};

export default class MainPage extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  _onPress = () => {}

  _onReportPress = () => {
    this.props.navigation.navigate('SelectCategory');
  }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage source={require('../../../assets/images/backgrounds/lodz.jpg')} />
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logos/logo.png')}
            resizeMode="center"
            style={styles.logo} />
          <CityChooser
            name="Łódź"
            onPress={this._onPress}/>
        </View>

        <View style={styles.navigationWrapper}>
          <PrimaryButton
            icon={<Icon name="location-on" size={30} color={COLORS.CORNFLOWER} />}
            onPress={this._onReportPress}
            text="Zgłoś" />
          <PrimaryButton
            icon={<Icon name="map" size={30} color={COLORS.CORNFLOWER} />}
            customStyles={SPACINGS.BUTTON_SPACING}
            onPress={this._onPress}
            text="Mapa" />
          <PrimaryButton
            icon={<Icon name="person" size={30} color={COLORS.CORNFLOWER} />}
            customStyles={SPACINGS.BUTTON_SPACING}
            onPress={this._onPress}
            text="Profil" />
        </View>
      </View>
    );
  }
}
