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
    paddingBottom: 30,
  },
  content: {
    paddingHorizontal: 15,
    marginTop: getSize.m(20),
    marginBottom: getSize.m(0),
    // height: Dimens.DEVICE_HEIGHT * 0.2,
    flex: 1,
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
  main: {
    marginBottom: 20,
    // height: Dimens.DEVICE_HEIGHT,
    flex: 1,
  },
  mainTopic: {
    marginBottom: 20,
  },
  mainSubTitle: {
    color: '#757575',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    textTransform: 'uppercase',
    marginTop: 10,
  },
  mainTitle: {color: '#242424', fontSize: 28, fontWeight: '900', marginTop: 10},
  mainList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 14,
    paddingLeft: 0,
  },
  mainItemText: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    color: '#333',
    fontWeight: '500',
    lineHeight: 18,
    marginHorizontal: 3,
    marginVertical: 2,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  blogList: {
    marginTop: 0,
  },
  blogItem: {
    borderWidth: 2,
    borderColor: '#e8e8e8',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },
  blogHeader: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogAuthor: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogAvt: {
    borderRadius: 9999,
    height: 28,
    resizeMode: 'cover',
    width: 28,
    overflow: 'hidden',
  },
  imgAvt: {
    width: '100%',
    height: '100%',
  },
  blogName: {
    marginLeft: 8,
    color: '#292929',
    fontSize: 12,
    fontWeight: '600',
  },
  blogTime: {
    fontSize: 13,
    color: '#242424',
  },
  blogMain: {
    width: '100%',
    height: 120,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  blogContent: {
    marginTop: 10,
  },
  blogTitle: {
    color: '#292929',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    marginBottom: 0,
  },
  blogDes: {},
  headerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 999,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },

  infoContainer: {},
  nameText: {color: '#292929', fontSize: 16, fontWeight: '600', margin: 0},
  timeText: {color: '#757575', margin: 0},
  actionsContainer: {
    flexDirection: 'row',
  },
  userContainerLeft: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionsIcon: {
    color: '#757575',
    position: 'relative',
  },
  mainText: {},
  reaction_wrapper: {flexDirection: 'row'},
  reaction_item: {
    flexDirection: 'row',
    marginRight: 10,
    padding: 5,
  },
  reaction_item_edit: {flexDirection: 'row', marginRight: 10, padding: 0},
  reaction_item_report: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
    padding: 5,
  },
  reaction_icon: {
    color: '#757575',
    fontSize: 16,
  },
  reaction_icon_report: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  reaction_text: {},
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 14,
    width: '100%',
  },
  containerModal: {
    flex: 1,
    borderRadius: 15,
  },
  modal: {
    flex: 1,
    backgroundColor: '#0000004a',
    padding: 20,
    paddingTop: 100,
    borderRadius: 15,
  },
  modal_endow: {
    // textAlign: 'center',
  },
  modalClose: {},
  modalCloseIcon: {
    textAlign: 'right',
  },
  modal_endow_comment: {},
  modal_endow_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_endow_item_report: {
    flexDirection: 'column',
  },
  modal_endow_images: {
    width: 30,
    height: 30,
    borderRadius: 999,
    overflow: 'hidden',
    marginRight: 10,
  },
  modal_endow_value: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimens.DEVICE_WIDTH * 0.5,
    justifyContent: 'space-between',
    flex: 1,
  },
  modal_endow_value_edit: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimens.DEVICE_WIDTH * 0.65,
    justifyContent: 'space-between',
    flex: 1,
  },
  modal_endow_value_report: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimens.DEVICE_WIDTH * 0.8,
    justifyContent: 'center',
  },
  inputModal: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    outline: 'none',
    flex: 1,
    width: Dimens.DEVICE_WIDTH * 0.6,
  },
  inputModalReport: {
    borderWidth: 1,
    borderColor: '#ccc',
    outline: 'none',
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimens.DEVICE_WIDTH * 0.8,
    justifyContent: 'center',
    marginTop: 20,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 10,
  },
  modal_bottom_btn_primary: {
    padding: 10,
    backgroundColor: '#f05123',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  modal_button_btn_text_primary: {
    color: '#fff',
  },
  modal_endow_header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tippy_module: {
    position: 'absolute',
    top: 20,
    right: 0,
    backgroundColor: '#F4F4F4',
    zIndex: 10,
    width: 190,
    paddingBottom: 10,
    padding: getSize.m(7),
    borderRadius: getSize.m(10),
  },
  tippy_module_coment: {
    position: 'absolute',
    top: 30,
    right: 60,
    backgroundColor: '#F4F4F4',
    zIndex: 10,
    width: 190,
    paddingBottom: 10,
    padding: getSize.m(7),
    borderRadius: getSize.m(10),
  },
  tippy_item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  tippy_icon: {},
  tippy_text: {
    color: '#444',
    fontSize: 15,
    marginLeft: getSize.m(5),
  },
  list_cmt: {
    marginTop: getSize.m(10),
    height: Dimens.DEVICE_HEIGHT * 0.45,
    flexDirection: 'column',
    display: 'flex',
  },
  cmt_item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getSize.m(10),
  },
  cmt_value: {
    color: '#444',
    fontSize: 13,
    marginLeft: getSize.m(2),
  },
  cmt_value_date: {
    color: '#444',
    fontSize: 11,
    marginLeft: getSize.m(2),
  },
  cmt_value_group: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  // save
  headingTabs_tabs: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  headingTabs_item: {
    textAlign: 'center',
    margin: 'auto',
    borderBottomColor: '#0000008a',
    borderBottomWidth: 1,
    width: '50%',
  },
  headingTabs_item_active: {
    borderBottomColor: '#f05123',
    textAlign: 'center',
    margin: 'auto',
    borderBottomWidth: 1,
    width: '50%',
  },
  headingTabs_tabs_text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#0000008a',
    paddingBottom: 5,
  },
  headingTabs_tabs_text_active: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#f05123',
    paddingBottom: 5,
  },
  blogcontent: {
    marginTop: 20,
  },
  blogcontentList: {},
  blogcontentItem: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#e8e8e8',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  blogcontentItem_title: {
    color: '#333',
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '600',
  },
  blogcontentItem_author: {},
  blogcontentItem_time: {
    fontSize: 14,
    color: '#029e74',
  },
  blogcontentItem_name: {fontSize: 14, marginVertical: 5},
  blogcontentItem_strong: {fontWeight: '600', marginLeft: 5},
  hidden: {
    display: 'none',
  },
  blogcontentItem_group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAction: {
    position: 'absolute',
    right: 20,
    top: 0,
    width: 40,
    backgroundColor: 'grey',
    borderBottomEndRadius: 10,
  },
  commentIcon: {
    margin: 5,
    color: 'white',
  },
  nodataMain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodata: {
    width: getSize.m(200),
    height: getSize.m(200),
  },
  imgNodata: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textNodata: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '600',
  },
  modal_title: {
    color: '#333',
    fontSize: 23,
    lineHeight: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  mainImgDetail: {
    marginTop: 30,
    width: '100%',
    height: getSize.m(200),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  mainImgDetail_img: {
    width: '100%',
    height: '100%',
  },
});