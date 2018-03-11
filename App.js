import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/javascripts/components/button/button';

export default class App extends React.Component {
  _onPress = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Button
          customStyle="primary"
          onPress={this._onPress}
          text="Zgłoś" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
