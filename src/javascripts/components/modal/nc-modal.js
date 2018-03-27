// @flow
import * as React from 'react';
import {Modal, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NcText from '../nc-text/nc-text';
import actions from '../../redux/actions/modal';
import styles from './styles';
import COLORS from '../../styles/colors';


function mapStateToProps(state) {
  return {
    activeModalName: state.activeModalName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: function(name) {
      dispatch(actions.actions.closeModal(name));
    }
  };
}

type Props = {
  activeModalName: string,
  closeModal: Function,
  name: string,
  children: React.Node,
  title: string,
  style?: Array<Object> | Object,
  titleStyle?: Object
};

class NcModal extends React.Component<Props> {
  _closeModal = () => {
    this.props.closeModal(this.props.name);
  }

  render() {
    let isVisible = this.props.activeModalName === this.props.name

    return (
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}
        visible={isVisible}>
        <View style={styles.container}>
          <View style={this.props.style}>
            <View style={styles.content}>
              <NcText style={[styles.title, this.props.titleStyle]}>{this.props.title}</NcText>
              {this.props.children}
            </View>
            <TouchableHighlight
                underlayColor={COLORS.ALTO}
                style={styles.close}
                onPress={this._closeModal}>
                <Icon name="close" size={24} color={COLORS.TUNDORA} />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NcModal);
