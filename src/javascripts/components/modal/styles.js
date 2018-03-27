import COLORS from '../../styles/colors';
import DIMENS from '../../styles/dimens'


export default {
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: 'rgba(53, 66, 138, 0.9)'
  },
  content: {
    borderRadius: DIMENS.BORDER_RADIUS,
    backgroundColor: COLORS.WHITE,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderWidth: 1,
    borderColor: COLORS.ALTO
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.TUNDORA,
    marginBottom: 16
  },
  close: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    position: 'absolute',
    right: -16,
    top: -16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 1,
    borderColor: COLORS.ALTO
  },
  alignCenter: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center'
  }
};
