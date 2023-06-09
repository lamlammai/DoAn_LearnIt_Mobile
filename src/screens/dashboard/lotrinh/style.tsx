import Dimens from '@base/common/Dimens';
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
    paddingTop: 30,
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
  desc: {
    color: '#474747',
    fontSize: 16,
    lineHeight: 26,
    marginVertical: 20,
  },
  containerBody: {},
  learningPath: {
    display: 'flex',
    flexDirection: 'row',
  },
  learningPathItem: {
    borderWidth: 2,
    borderColor: '#e8e8e8',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    width: 300,
    marginRight: 20,
  },
  learningPathItemBody: {},
  learningPathItem_title: {
    color: '#242424',
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 14,
  },
  learningPathItem_desc: {
    fontSize: 15,
    lineHeight: 24,
    margin: 0,
  },
  btnBox: {
    backgroundColor: '#f05123',
    borderWidth: 1,
    borderColor: '#f05123',
    borderRadius: 9999,
    fontWeight: '600',
    paddingHorizontal: 30,
    paddingVertical: 9,
    textAlign: 'center',
    marginTop: 20,
    width: Dimens.DEVICE_WIDTH * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  btnBoxNormal: {
    backgroundColor: '#f05123',
    borderWidth: 2,
    borderColor: '#f05123',
    borderRadius: 9999,
    fontWeight: '600',
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnTextNormal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  suggestionBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  suggestionBox_info: {
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 32,
  },
  suggestionBox_des: {
    fontSize: 16,
    lineHeight: 21,
    marginVertical: 10,
  },
  pathDetail_heading: {
    color: '#EE3F19',
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
  },
  pathDetail_Desc: {},
  pathDetail_des: {
    color: '#474747',
    fontSize: 16,
    lineHeight: 25,
    marginVertical: 7,
  },
  pathDetail_quote: {
    borderLeftWidth: 3,
    borderColor: '#f05123',
    color: '#757575',
    marginLeft: 0,
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 25,
    paddingHorizontal: 20,
  },
  pathDetailGroup: {
    marginTop: 10,
  },
  pathDetailGroupBody: {
    marginTop: 15,
  },
  pathDetailGroup_title: {
    color: '#242424',
    fontSize: 22,
    fontWeight: '900',
  },
  pathDetailGroup_desc: {
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
  },
  pathDetailGroupItem: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 16,
    marginVertical: 7,
    padding: 16,
  },
  pathDetailThumb: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 16,
    overflow: 'hidden',
  },
  pathDetailInfo: {
    marginTop: 8,
  },
  pathDetailInfotitle: {
    fontSize: 18,
    color: '#706E6E',
    fontWeight: '700',
    margin: 0,
  },
  pathDetailInfoPrice: {
    color: '#f05123',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 4,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  pathDetailInfoDesc: {
    wordWrap: 'break-word',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 8,
    marginTop: 8,
    overflow: 'hidden',
  },
});
