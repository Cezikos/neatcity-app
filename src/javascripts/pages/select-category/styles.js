import { StyleSheet } from 'react-native';

import COLORS from '../../styles/colors';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    alignSelf: 'stretch'
  },
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  navigationWrapper: {
    backgroundColor: 'transparent',
    paddingBottom: 25,
    width: 185,
    alignSelf: 'center'
  },
  headline: {
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingBottom: 25,
    paddingLeft: 16,
    paddingRight: 16
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    marginTop: 35
  }
});
