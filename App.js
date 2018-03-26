import React from 'react';

import MainPage from './src/javascripts/pages/main/main-page';
import SelectCategoryPage from './src/javascripts/pages/select-category/select-category-page';
import AddReportPage from './src/javascripts/pages/add-report/add-report-page';
import StatusPage from './src/javascripts/pages/status/status-page';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    'Main': {
      screen: MainPage
    },
    'SelectCategory': {
      screen: SelectCategoryPage
    },
    'AddReport': {
      screen: AddReportPage
    },
    'StatusPage': {
      screen: StatusPage
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
