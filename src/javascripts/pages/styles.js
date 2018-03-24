import { StyleSheet } from 'react-native';

import DIMENS from '../styles/dimens';
import COLORS from '../styles/colors';


export default StyleSheet.create({
  bodyText: {
    color: COLORS.BLACK
  },
  secondaryText: {
    color: COLORS.TUNDORA
  },
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
   alignStart: {
     alignSelf: 'flex-start'
   },
   alignCenter: {
    alignSelf: 'center'
  },
  inlineBox: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingTop: 16
  },
  listItemSeparator: {
    borderTopWidth: 1,
    borderColor: COLORS.ALTO
  }
});
