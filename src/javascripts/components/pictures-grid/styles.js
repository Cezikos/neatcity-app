import { StyleSheet } from 'react-native';

import COLORS from '../../styles/colors';
import DIMENS from '../../styles/dimens';


const gridItem = {
  aspectRatio: 1,
  flexGrow: 0,
  flexShrink: 0,
  width: '33%'
};

const gridItemContent = {
  aspectRatio: 1,
  borderRadius: DIMENS.BORDER_RADIUS,
  margin: 8,
  overflow: 'hidden',
  width: '100%'
}

export default StyleSheet.create({
  picturesGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -10
  },
  image: {
    ...gridItemContent
   },
  imageContainer: {
    ...gridItem
  },
  addPictureLabel: {
    ...gridItemContent,
    alignItems: 'center',
    borderColor: COLORS.SILVER,
    borderWidth: 1,
    justifyContent: 'center'
  }
});
