// @flow
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PrimaryButton from '../../components/button/primary-button';
import BackgroundImage from '../../components/background-image/background-image';
import CityChooser from '../../components/city-chooser/city-chooser';
import ChooseCityModal from '../../components/modal/choose-city-modal';
import COLORS from '../../styles/colors';
import SPACINGS from  '../../styles/spacings';
import styles from  './styles';
import STRINGS from '../../values/strings';
import actions from '../../redux/actions/modal';
import CONSTANTS from '../../redux/constants/modal';


type Props = {
  navigation: Function,
  city: string,
  openModal: Function
};

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => {
      dispatch(actions.actions.openModal(CONSTANTS.MODALS.CHOOSE_CITY));
    }
  };
}

class MainPage extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  _onPress = () => {
  }

  _navigateTo = (page) => () => {
    this.props.navigation.navigate(page);
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
            name={'Łódź'}
            onPress={this.props.openModal}/>
        </View>

        <View style={styles.navigationWrapper}>
          <PrimaryButton
            icon={<Icon name="location-on" size={30} color={COLORS.CORNFLOWER} />}
            onPress={this._navigateTo('SelectCategory')}
            text={STRINGS.PAGE.REPORT} />
          <PrimaryButton
            icon={<Icon name="map" size={30} color={COLORS.CORNFLOWER} />}
            customStyles={SPACINGS.MARGIN_TOP_24}
            onPress={this._onPress}
            text={STRINGS.PAGE.MAP} />
          <PrimaryButton
            icon={<Icon name="person" size={30} color={COLORS.CORNFLOWER} />}
            customStyles={SPACINGS.MARGIN_TOP_24}
            onPress={this._navigateTo('Profile')}
            text={STRINGS.PAGE.PROFILE} />
        </View>

        <ChooseCityModal />
      </View>
    );
  }
}


export default connect(
  null,
  mapDispatchToProps
)(MainPage);
