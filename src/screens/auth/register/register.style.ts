import {StyleSheet} from 'react-native';
import Dimens from '@base/common/Dimens';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import Color from '@theme/Color';
import Font from '@theme/Font';

const styles = StyleSheet.create({
  content: {
    // flex: 1,
  },

  contentTablet: {
    alignSelf: 'center',
    width: Dimens.DEVICE_WIDTH,
    elevation: 3,
    shadowColor: Color.GRAY_DEEP,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingHorizontal: getSize.m(20),
    backgroundColor: Color.WHITE,
    height: Dimens.DEVICE_HEIGHT,
  },

  textTitleLogin: {
    color: '#2E2E2E',
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(25, 0.3),
  },

  textNoAccount: {
    fontFamily: Font.font_regular_400,
    color: '#9E9E9E',
    fontSize: getSize.m(13, 0.3),
  },

  textRegister: {
    fontFamily: Font.font_bold_700,
    color: Color.TEXT_PRIMARY,
    fontSize: getSize.m(13, 0.3),
    paddingHorizontal: getSize.m(5),
    paddingVertical: getSize.m(5),
  },

  btnLogin: {
    backgroundColor: Color.TEXT_PRIMARY,
    height: getSize.m(48),
    borderRadius: getSize.m(24),
    marginTop: getSize.m(30),
    ...Styles.centerNoFlex,
    marginBottom: getSize.m(20),
  },

  textLogin: {
    color: Color.WHITE,
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(15, 0.3),
  },

  btnBack: {
    position: 'absolute',
    top: getSize.m(30),
    left: getSize.m(30),
    zIndex: 100,
  },

  btnGoLogin: {
    backgroundColor: Color.TEXT_PRIMARY,
    height: getSize.m(48),
    borderRadius: getSize.m(24),
    position: 'absolute',
    bottom: getSize.m(40),
    marginHorizontal: getSize.m(30),
    width: Dimens.DEVICE_WIDTH - getSize.m(60),
    ...Styles.centerNoFlex,
  },

  btnGoLoginTablet: {
    position: 'relative',
    width: Dimens.DEVICE_WIDTH * 0.75 - getSize.m(80),
    bottom: 0,
  },

  contentSignSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },

  textSignSuccess: {
    fontSize: getSize.m(22, 0.3),
    fontFamily: Font.font_bold_700,
    color: '#2E2E2E',
    textAlign: 'center',
    marginBottom: getSize.m(15),
  },

  textTutorial: {
    fontSize: getSize.m(18, 0.3),
    color: '#2E2E2E',
    textAlign: 'center',
    marginHorizontal: getSize.m(40),
    fontFamily: Font.font_regular_400,
    marginBottom: getSize.m(25),
  },

  formData: {
    marginHorizontal: Dimens.DEVICE_WIDTH * 0.12,
  },

  textTitle: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(30, 0.3),
  },

  textEdu: {
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(25, 0.3),
    color: Color.TEXT_SECONDARY,
  },
  logoLogin: {
    width: 50,
    height: 50,
  },
  blockLogo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
