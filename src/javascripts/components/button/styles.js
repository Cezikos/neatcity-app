import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';


const baseStyles = {
  borderRadius: 50,
};

const small = {
  paddingBottom: 10,
  paddingLeft: 35,
  paddingRight: 35,
  paddingTop: 10
};

const big = {
  paddingBottom: 15,
  paddingLeft: 42,
  paddingRight:42,
  paddingTop: 15
};

export default StyleSheet.create({
  primaryContainer: {
    ...baseStyles,
    ...big,
    backgroundColor: COLORS.CHAMBRAY,
  },
  primaryContainerSmall: {
    ...baseStyles,
    ...small,
    backgroundColor: COLORS.CHAMBRAY,
  },
  primarayText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 18
  },
  primarayTextSmall: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 14
  },
  inlineFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  withIcon: {
    paddingLeft: 5
  },
  highlight: {
    ...baseStyles
  }
});
