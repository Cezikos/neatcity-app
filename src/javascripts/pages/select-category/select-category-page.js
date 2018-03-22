// @flow
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PrimaryButtonSmall from '../../components/button/primary-button-small';
import BackgroundImage from '../../components/background-image/background-image';
import CityChooser from '../../components/city-chooser/city-chooser';
import NcText from '../../components/nc-text/nc-text';
import COLORS from '../../styles/colors';
import SPACINGS from  '../../styles/spacings';
import styles from  './styles';

type Props = {
  navigation: Function,
  categories: Array<Object>
};

export default class SelectCategoryPage extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };

  static defaultProps : Object;


  _navigateTo = (category) => () => {
    this.props.navigation.navigate('AddReport', { category });
  }

  _renderCategories = () => {
    return this.props.categories.map((category, index) => {
      return (
        <PrimaryButtonSmall
          key={`category-${category.id}`}
          customStyles={!!index ?SPACINGS.MARGIN_TOP_24 : null}
          onPress={this._navigateTo(category)}
          text={category.name} />
      );
    })
  }

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
              {this._renderCategories()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SelectCategoryPage.defaultProps = {
  categories: [
    {
      id: 0,
      name: 'Zniszczona zieleń'
    },
    {
      id: 1,
      name: 'Porzucone wraki'
    },
    {
      id: 2,
      name: 'Infrastruktura drogowa'
    },
    {
      id: 3,
      name: 'Niepoprawne oznakowanie'
    }
  ]
};
