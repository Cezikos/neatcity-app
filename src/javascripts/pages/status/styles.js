import { StyleSheet } from 'react-native';

import COLORS from '../../styles/colors';


export default StyleSheet.create({
  successContainer: {
    backgroundColor: COLORS.CHAMBRAY
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 250
  },
  message: {
    marginTop: 8,
    color: COLORS.WHITE,
    fontSize: 20,
    textAlign: 'center'
  }
});
