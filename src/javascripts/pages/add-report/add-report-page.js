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
import sharedStyles from  '../styles';
import COLORS from '../../styles/colors';
import SPACINGS from '../../styles/spacings';
import STRINGS from '../../values/strings';


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
          <Icon style={sharedStyles.closeButton} name="close" size={30} color={COLORS.SCORPION} />
          <View style={sharedStyles.paddedBox}>
            <Headline>{STRINGS.HEADLINE.ADD_REPORT}</Headline>

            <SectionLabel style={SPACINGS.MARGIN_TOP_32}>
              {STRINGS.LABEL.TITLE}
            </SectionLabel>
            <NcTextInput />

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              {STRINGS.LABEL.DESCRIPTION}
            </SectionLabel>
            <NcTextInput multiline={true} />

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              {STRINGS.LABEL.CATEGORY}
            </SectionLabel>

            <View style={[sharedStyles.inlineBox, SPACINGS.MARGIN_TOP_8]}>
              <Sticker name={this.state.category.name} />
              <LinkButton
                customStyles={SPACINGS.MARGIN_LEFT_8}
                onPress={this._onPress}
                text={STRINGS.ACTION.CHANGE} />
            </View>

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
            {STRINGS.LABEL.PHOTOS}
            </SectionLabel>

            <PicturesGrid style={SPACINGS.MARGIN_TOP_8}>
              {this._renderImages()}
              <ImageContainer>
                <AddPictureLabel onPress={this._onPress} />
              </ImageContainer>
            </PicturesGrid>

            <PrimaryButton
              customStyles={StyleSheet.flatten([sharedStyles.alignCenter, SPACINGS.MARGIN_TOP_32])}
              onPress={this._onPress}
              text={STRINGS.ACTION.MARK_ON_MAP} />
        </View>
      </ScrollView>
    );
  }
}
