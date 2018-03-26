// @flow
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OutlineButton from '../../components/button/outline-button';
import NcText from '../../components/nc-text/nc-text';
import styles from './styles';
import COLORS from '../../styles/colors'
import STRINGS from '../../values/strings';


type Props = {
  status: string
};


class StatusPage extends React.Component<Props> {
  STATUSES: Array<Object>;
  ACTIONS: Object

  static navigationOptions = {
    header: null
  };

  ACTIONS = {
    GO_TO_REPORT: 'GO_TO_REPORT',
    GO_BACK: 'GO_BACK'
  };

  STATUSES = [
    {
      name: 'SUCCESS',
      icon: <Icon name="done" size={40} color={COLORS.CONIFER} />,
      message: STRINGS.MESSAGE.REPORT_HAS_BEEN_SENT_SUCCESSFULLY,
      action: this.ACTIONS.GO_TO_REPORT
    },
    {
      name: 'FAIL',
      icon: <Icon name="close" size={40} color={COLORS.CORAL_RED} />,
      message: STRINGS.MESSAGE.SOMETHING_WENT_WRONG_CHECK,
      action: this.ACTIONS.GO_BACK
    },
    {
      name: 'LOAD',
      icon: <ActivityIndicator size="large" color={COLORS.WHITE} />,
      message: STRINGS.MESSAGE.SENDING
    }
  ];

  static defaultProps : Props

  _onClose = (action: string) => () => {
    switch (action) {
      case this.ACTIONS.GO_TO_REPORT:
      break;

      case this.ACTIONS.GO_BACK:
      break;
    }
  }

  render() {
    let status : ?Object = this.STATUSES.find((status) => this.props.status == status.name);

    if (!status) {
      status = this.STATUSES[2];
    }

    return (
      <View style={[styles.container, styles.successContainer]}>
        <View style={styles.content}>
        {status.icon}
        <NcText style={styles.message}>
          {status.message}
        </NcText>
        </View>
        <View style={styles.footer}>
          {status.action &&
            <OutlineButton
              onPress={this._onClose(status.action)}
              text={STRINGS.ACTION.CLOSE} />
          }
        </View>
      </View>
    );
  }
}

StatusPage.defaultProps = {
  status: 'SUCCESS',
}

export default StatusPage;
