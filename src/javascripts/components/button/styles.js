import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors';


const baseStyles = {
  borderRadius: 50,
  textAlign: 'center'
};

const small = {
  fontSize: 14,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10
};

const big = {
  fontSize: 18,
  paddingBottom: 15,
  paddingLeft: 42,
  paddingRight:42,
  paddingTop: 15
};

export default StyleSheet.create({
  primarySmall: {
    ...baseStyles,
    ...small,
    backgroundColor: COLORS.CHAMBRAY,
    color: COLORS.WHITE
  },
  primary: {
    ...baseStyles,
    ...big,
    backgroundColor: COLORS.CHAMBRAY,
    color: COLORS.WHITE
  },
  secondarySmall: {
    ...baseStyles,
    ...small,
    backgroundColor: COLORS.GALLERY,
    color: COLORS.TUNDORA
  }
});
