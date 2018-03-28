// @flow
import * as React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import LinkButton from '../../components/button/link-button';
import Headline from '../../components/headline/headline';
import SectionLabel from '../../components/section-label/section-label';
import NcText from '../../components/nc-text/nc-text';
import NcTextInput from '../../components/nc-text-input/nc-text-input';
import NcSwitch from '../../components/nc-switch/nc-switch';
import NcHint from '../../components/nc-hint/nc-hint';
import ReputationHintModal from '../../components/modal/reputation-hint-modal';
import SlideDownUp from '../../components/animated/slide-down-up';
import styles from './styles';
import sharedStyles from '../styles';
import COLORS from '../../styles/colors';
import SPACINGS from '../../styles/spacings';
import STRINGS from '../../values/strings';
import iconsMap from './icons-map';
import actions from '../../redux/actions/modal';
import CONSTANTS from '../../redux/constants/modal';


type Props = {
  navigation: Function,
  user: Object,
  reports: Array<Object>,
  openModal: Function
};

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => {
      dispatch(actions.actions.openModal(CONSTANTS.MODALS.REPUTATION_HINT));
    }
  };
}

type State = {
  isPasswordChangeActive: boolean,
};

class ProfilePage extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isPasswordChangeActive: false,
    }
  }
  static navigationOptions = {
    header: null
  };

  static defaultProps : Object;

  _onPasswordChangeClick = () => {
    this.setState({
      isPasswordChangeActive: !this.state.isPasswordChangeActive
    });
  }

  _onPasswordChangeSubmit = () => {}

  _onReputationHintPress = () => {
    this.props.openModal();
  }

  _renderPasswordChangeForm = () => {
    return (
      <React.Fragment>
        <SectionLabel style={SPACINGS.MARGIN_TOP_32}>
          {STRINGS.LABEL.OLD_PASSWORD}
        </SectionLabel>
        <NcTextInput secureTextEntry={true} />

        <SectionLabel style={SPACINGS.MARGIN_TOP_32}>
          {STRINGS.LABEL.NEW_PASSWORD}
        </SectionLabel>
        <NcTextInput secureTextEntry={true} />

        <View style={[sharedStyles.inlineBox, SPACINGS.MARGIN_TOP_16]}>
          <LinkButton
            onPress={this._onPasswordChangeSubmit}
            gray={true}
            text={STRINGS.ACTION.CONFIRM_PASSWORD_CHANGE} />
          <LinkButton
            customStyles={SPACINGS.MARGIN_LEFT_8}
            onPress={this._onPasswordChangeClick}
            text={STRINGS.ACTION.CLOSE} />
        </View>
      </React.Fragment>
    );
  }

  _renderReportsList = () => {
    return this.props.reports.map((report, index) => {
      return (
        <View
          style={[sharedStyles.listItem, index > 0 ? sharedStyles.listItemSeparator : null]}
          key={`report-${index}`}>
          <Icon name={iconsMap[report.category.id]} size={25} color={COLORS.SILVER} />
          <NcText style={[sharedStyles.bodyText, SPACINGS.MARGIN_LEFT_8]}>
            {report.name}
            <NcText style={sharedStyles.secondaryText}> {report.location}</NcText>
          </NcText>
        </View>
      );
    })
  }

  render() {
    const { user } = this.props;
    const { reports } = this.props;

    const reputationHint = <NcHint onPress={this._onReputationHintPress}style={SPACINGS.MARGIN_LEFT_8} />;

    return (
      <ScrollView>
          <Icon style={sharedStyles.closeButton} name="close" size={30} color={COLORS.SCORPION} />
          <View style={sharedStyles.paddedBox}>
            <Headline>{STRINGS.HEADLINE.MY_PROFILE}</Headline>

            <SectionLabel style={SPACINGS.MARGIN_TOP_32}>
              {STRINGS.LABEL.NAME_NICK}
            </SectionLabel>
            {user && user.name ?
              <NcText style={[SPACINGS.MARGIN_TOP_8, sharedStyles.bodyText]}>{user.name}</NcText>
              : null
            }

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              {STRINGS.LABEL.EMAIL}
            </SectionLabel>
            {user && user.email ?
              <NcText style={[SPACINGS.MARGIN_TOP_8, sharedStyles.bodyText]}>{user.email}</NcText>
              : null
            }

            <SlideDownUp active={this.state.isPasswordChangeActive}>
              {this._renderPasswordChangeForm()}
            </SlideDownUp>

            {user && user.accountType === 'OWN'  && !this.state.isPasswordChangeActive &&
              <LinkButton
                customStyles={[sharedStyles.alignStart, SPACINGS.MARGIN_TOP_16]}
                onPress={this._onPasswordChangeClick}
                gray={true}
                text={STRINGS.ACTION.PASSWORD_CHANGE} />
            }

            <SectionLabel style={SPACINGS.MARGIN_TOP_24} iconAfter={reputationHint}>
              {STRINGS.LABEL.REPUTATION}
            </SectionLabel>

            <NcText style={[sharedStyles.bodyText, SPACINGS.MARGIN_TOP_8]}>
              {STRINGS.HINT.YOU_CAN_ADD_REPORTS_BUT}
            </NcText>

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              {STRINGS.LABEL.SETTINGS}
            </SectionLabel>

            <View style={[styles.optionBox, SPACINGS.MARGIN_TOP_8]}>
              <NcText style={sharedStyles.bodyText}>{STRINGS.SETTING.NOTIFY_ME_WHEN_SOMEONE_ANSERWS}</NcText>
              <NcSwitch value={!!user.properties.notifyAnswer} />
            </View>

            <View style={[styles.optionBox, SPACINGS.MARGIN_TOP_8]}>
              <NcText style={sharedStyles.bodyText}>{STRINGS.SETTING.NOTIFY_ME_WHEN_MY_REPORT}</NcText>
              <NcSwitch value={!!user.properties.notifyPopular} />
            </View>

            <SectionLabel style={SPACINGS.MARGIN_TOP_24}>
              {STRINGS.LABEL.MY_REPORTS}
            </SectionLabel>

            {reports.length > 0 ?
              this._renderReportsList()
              : <NcText style={[sharedStyles.bodyText, SPACINGS.MARGIN_TOP_8]}>{STRINGS.HINT.YOU_DONT_HAVE_ANY_REPORTS_YET}</NcText>
            }
        </View>

        <ReputationHintModal />
      </ScrollView>
    );
  }
}

ProfilePage.defaultProps = {
  user: {
    accountType: 'OWN',
    name: 'John Doe',
    email: 'john.doe@example.com',
    reputation: 1,
    properties: {
      notifyAnswer: true,
      notifyPopular: null
    }
  },
  reports: [
    {
      id: 1,
      name: 'Porzucony Wrak',
      location: 'Głowackiego 13A',
      category: {
        id: 0,
        name: 'Porzucone wraki'
      }
    },
    {
      id: 2,
      name: 'Przewrócone drzewo',
      location: 'Zachodnia 123',
      category: {
        id: 1,
        name: 'Zniszczona zieleń'
      }
    }
  ]
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePage);
