import Dimens from '@base/common/Dimens';
import {getSize} from '@base/common/responsive';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 14,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    lineHeight: 15,
  },
  content: {
    paddingHorizontal: 15,
  },
  carousel: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
    flex: 1,
  },
  carouselText: {
    paddingTop: getSize.m(40),
    paddingHorizontal: getSize.m(20),
  },
  carouselTitle: {
    fontWeight: '900',
    margin: 0,
    marginHorizontal: 'auto',
    maxWidth: '100%',
    color: '#ffffff',
    fontSize: getSize.m(27),
    lineHeight: getSize.m(27),
    marginBottom: getSize.m(10),
  },
  carouselSubTitle: {
    color: '#ffffff',
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'left',
    width: Dimens.DEVICE_WIDTH * 0.7,
  },
  carouselButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    textAlign: 'center',
    width: Dimens.DEVICE_WIDTH * 0.4,
    marginTop: getSize.m(10),
  },
  carouselButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  sectionListMain: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  sectionListMainDisable: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    opacity: 0.6,
  },
  textIntro: {
    color: '#82919b',
    fontWeight: '700',
    marginTop: 20,
  },
  textIntroNormal: {
    fontWeight: '400',
  },
  sectionList: {
    marginTop: 10,
  },
  sectionListTab: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sectionListTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: '700',
  },
  buttonText: {
    margin: 0,
    fontSize: 15,
    fontWeight: '600',
    color: '#fa1313',
  },
  learningPrice: {
    flexDirection: 'row',
  },
  learningText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
    fontWeight: '600',
    margin: 0,
    marginTop: 10,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
  learningTextPrice: {
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginRight: 5,
  },
  learningTextPriceKm: {
    fontSize: 16,
    lineHeight: 20,
    color: '#f05123',
    textDecorationLine: 'none',
  },
  learningIcon: {
    marginRight: getSize.m(4),
  },
  imgItem: {
    width: Dimens.DEVICE_WIDTH - 130,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  learningItem: {
    marginHorizontal: 10,
    flex: 1,
    width: Dimens.DEVICE_WIDTH - 130,
  },
  learningNumber: {
    color: '#82919b',
    fontSize: 15,
  },
  sectionInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  imgAvt: {
    width: 30,
    height: 30,
    borderRadius: 999,
  },
  infoName: {
    color: '#82919b',
    marginHorizontal: 5,
  },
});
