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
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5422a',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingTop: 40,
  },
  icon: {
    color: '#fff',
  },
  headerName: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  des: {
    color: '#292929',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 15,
  },
  mainBody: {
    marginTop: 20,
  },
  mainTitle: {
    color: '#242424',
    fontSize: 20,
    fontWeight: '700',
  },
  mainList: {
    marginTop: 6,
    marginBottom: 10,
  },
  mainTab: {
    flexDirection: 'row',
    marginTop: 10,
  },
  mainTabTitle: {
    color: '#44494D',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#44494D',
  },
  mainTabTitleActive: {
    color: '#f13b17',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f13b17',
  },
  mainItem: {
    marginRight: 20,
    flex: 1,
    width: Dimens.DEVICE_WIDTH - 130,
  },
  mainItemDisable: {
    opacity: 0.6,
    marginRight: 10,
    flex: 1,
    width: Dimens.DEVICE_WIDTH - 130,
  },
  itemThumb: {
    width: '100%',
    height: 120,
    overflow: 'hidden',
    borderRadius: 8,
  },
  itemTitle: {
    color: '#292929',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    marginTop: getSize.m(6),
    flex: 1,
  },
  suggestionBox_wrapper: {marginTop: 20, marginBottom: 20},
  suggestionBox_title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 26,
    color: '#44494D',
  },
  suggestionBox_des: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    color: '#44494D',
    marginTop: 5,
  },
  suggestionBox_route: {
    borderWidth: 2,
    borderColor: '#292929',
    borderRadius: 999,
    color: '#292929',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    textAlign: 'center',
  },
  suggestionBox_link: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
