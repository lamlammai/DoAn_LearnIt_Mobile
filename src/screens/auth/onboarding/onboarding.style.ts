import {StyleSheet} from 'react-native';
import Dimens from '@base/common/Dimens';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import Color from '@theme/Color';
import Font from '@theme/Font';

const styles = StyleSheet.create({
  contentOnBoard: {
    flex: 1,
  },
  textTitle: {
    fontFamily: Font.font_bold_700,
    color: Color.RED_HOLDER,
    fontSize: getSize.m(35, 0.3),
  },

  textTitleEdu: {
    fontFamily: Font.font_bold_700,
    color: Color.TEXT_SECONDARY,
    fontSize: getSize.m(35, 0.3),
  },

  imgIntro: {
    alignSelf: 'center',
    marginTop: getSize.m(10),
    width: getSize.m(Dimens.DEVICE_WIDTH * 0.6),
    height: getSize.m(Dimens.DEVICE_WIDTH * 0.6),
  },

  content: {
    marginHorizontal: getSize.m(30),
    flexDirection: 'column',
  },

  contentTablet: {
    marginHorizontal: (Dimens.DEVICE_WIDTH * 0.4) / 2,
  },

  textWelcome: {
    fontFamily: Font.font_bold_700,
    color: '#2E2E2E',
    fontSize: getSize.m(20, 0.3),
    marginTop: getSize.m(10),
  },

  noteWelcome: {
    color: '#2E2E2E',
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(15, 0.3),
    marginTop: getSize.m(10),
  },

  btnNext: {
    position: 'absolute',
    bottom: getSize.m(20),
    backgroundColor: Color.TEXT_SECONDARY,
    height: getSize.m(50),
    alignSelf: 'center',
    ...Styles.centerNoFlex,
    borderRadius: getSize.m(25),
    paddingHorizontal: getSize.m(40),
  },

  btnNextTablet: {
    right: (Dimens.DEVICE_WIDTH * 0.4) / 2,
  },

  textNext: {
    fontSize: getSize.m(15, 0.3),
    color: Color.WHITE,
    fontFamily: Font.font_bold_700,
  },

  btnIntroNotify: {
    position: 'absolute',
    bottom: getSize.m(20),
    alignSelf: 'center',
  },

  btnIntroNotifyTablet: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: Dimens.DEVICE_WIDTH * 0.6,
    bottom: getSize.m(20),
  },

  btnTurnOn: {
    backgroundColor: Color.TEXT_PRIMARY,
    height: getSize.m(54),
    borderRadius: getSize.m(28),
    paddingHorizontal: getSize.m(50),
    ...Styles.centerNoFlex,
    marginBottom: getSize.m(15),
  },

  btnTurnOff: {
    height: getSize.m(54),
    ...Styles.centerNoFlex,
  },

  textTurnOff: {
    fontSize: getSize.m(18, 0.3),
    fontFamily: Font.font_regular_400,
    color: '#A7A7A7',
  },
  blockLogo: {},
  logoLogin: {},
  textEdu: {},
});

export default styles;
