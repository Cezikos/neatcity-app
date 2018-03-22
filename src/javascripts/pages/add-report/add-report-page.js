// @flow
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Headline from '../../components/headline/headline';
import SectionLabel from '../../components/section-label/section-label';
import LinkButton from '../../components/button/link-button';
import Sticker from '../../components/sticker/sticker';
import PicturesGrid from '../../components/pictures-grid/pictures-grid';
import PrimaryButton from '../../components/button/primary-button';
import AddPictureLabel from '../../components/pictures-grid/add-picture-label';
import ImageContainer from '../../components/pictures-grid/image-container';
import NcTextInput from '../../components/nc-text-input/nc-text-input';
import styles from './styles';
import COLORS from '../../styles/colors';
import SPACINGS from '../../styles/spacings';

type Props = {
  navigation: Function
};

type State = {
  images: Array<string>,
  category: Object
};

export default class AddReportPage extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      category: {},
      images: [
        'https://picsum.photos/200/300/?random',
        'https://picsum.photos/200/300/?random',
        'https://picsum.photos/200/300/?random',
        'https://picsum.photos/200/300/?random',
        'https://picsum.photos/200/300/?random'
      ]
    };
  }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const category = params ? params.category : {};

    this.setState({
      category: category
    });
  }

  _onPress = () => {}

  _renderImages = () => {
    return this.state.images.map((url, index) => <ImageContainer key={`img-${index}`} source={{uri: url}} />);
  }

  render() {


    return (
      <ScrollView>
          <Icon style={styles.closeButton} name="close" size={30} color={COLORS.SCORPION} />
          <View style={styles.paddedBox}>
            <Headline>Dodaj zgłoszenie</Headline>

            <SectionLabel style={SPACINGS.MARGIN_TOP_32}>
              Tytuł
            </SectionLabel>
            <NcTextInput />

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              Opis
            </SectionLabel>
            <NcTextInput multiline={true} />

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              Kategoria
            </SectionLabel>

            <View style={styles.categoryBox}>
              <Sticker name={this.state.category.name} />
              <LinkButton
                customStyles={SPACINGS.MARGIN_LEFT_8}
                onPress={this._onPress}
                text="Zmień" />
            </View>

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              Zdjęcia
            </SectionLabel>

            <PicturesGrid style={SPACINGS.MARGIN_TOP_8}>
              {this._renderImages()}
              <ImageContainer>
                <AddPictureLabel onPress={this._onPress} />
              </ImageContainer>
            </PicturesGrid>

            <PrimaryButton
              customStyles={StyleSheet.flatten([styles.alignCenter, SPACINGS.MARGIN_TOP_32])}
              onPress={this._onPress}
              text="Oznacz na mapie" />
        </View>
      </ScrollView>
    );
  }
}