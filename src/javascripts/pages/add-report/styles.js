import { StyleSheet } from 'react-native';

import COLORS from '../../styles/colors';
import DIMENS from '../../styles/dimens';

export default StyleSheet.create({
  paddedBox: {
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 48
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16
  },
  categoryBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 8
  },
   alignCenter: {
     alignSelf: 'center'
   }
});
