import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';


const baseStyles = {
  borderRadius: 50,
};

const small = {
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8
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
  linkText: {
    color: COLORS.TUNDORA,
    fontSize: 14,
    textAlign: 'center'
  },
  inlineFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grayBackground: {
    backgroundColor: COLORS.SILVER
  },
  withIcon: {
    paddingLeft: 5
  },
  highlight: {
    ...baseStyles
  },
  linkContainer: {
    ...baseStyles,
    ...small
  }
});
