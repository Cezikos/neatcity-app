import React from 'react';

import MainPage from './src/javascripts/pages/main/main-page';
import SelectCategory from './src/javascripts/pages/select-category/select-category-page'
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    'Main': {
      screen: MainPage
    },
    'SelectCategory': {
      screen: SelectCategory
    }
  },
  {
    initialRouteName: 'Main',
  }
);


export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
