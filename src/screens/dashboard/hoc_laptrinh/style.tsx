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
    marginTop: getSize.m(20),
    // marginBottom: getSize.m(60),
    height: Dimens.DEVICE_HEIGHT * 0.83,
    // flex: 1,
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
  main: {},
  courseDetailName: {
    fontSize: 27,
    lineHeight: 30,
    marginTop: 10,
    color: '#666666',
    fontWeight: '700',
  },
  courseDetail_textContent: {
    color: '000000cc',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 7,
  },
  courseDetail_purchaseBadge: {
    borderWidth: 1,
    borderColor: '#ebebeb',
    marginTop: 16,
    paddingBottom: 8,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
  },
  courseDetail_purchasePrice: {
    color: '#f05123',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 'auto',
    opacity: 0.8,
  },
  courseDetail_List: {},
  courseDetail_ItemIcon: {
    color: '#DC2828',
    fontSize: 18,
    lineHeight: 20,
    marginRight: 8,
  },
  courseDetail_ItemText: {
    color: '#494949',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  courseDetail_ItemText_strong: {
    fontWeight: '500',
    marginLeft: 5,
    lineHeight: 21,
    marginBottom: 2,
  },
  courseDetail_Item: {
    flexDirection: 'row',
    color: '#494949',
    fontSize: 16,
    lineHeight: 20,
    alignItems: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  courseDetail_ItemTextStrong: {
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 14,
    lineHeight: 16,
  },
  curriculumOfCourse: {
    marginTop: 20,
  },
  curriculumOfCourse_panelGroup: {},
  curriculumOfCourseTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  curriculumOfCourseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  curriculumOfCourseValue: {
    fontSize: 14,
    lineHeight: 16,
  },
  curriculumOfCourseStrong: {
    fontWeight: '600',
  },
  curriculumOfCourse_panelBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  curriculumOfCourse_panel: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 6,
    padding: 0,
    zIndex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  curriculumOfCourseIcon: {
    color: '#f05123',
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 7,
  },
  curriculumOfCourseheadline: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
  },
  curriculumOfCourseTime: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '300',
  },
  curriculumOfCourse_content: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  curriculumOfCourse_contentItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000008',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginTop: 10,
  },
  curriculumOfCourseContentIcon: {
    color: '#f0512366',
  },
  curriculumOfCourseContentValue: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
    overflow: 'hidden',
    marginLeft: 10,
  },
  curriculumOfCourseContentTime: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
  button_bottom: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: -2},
    elevation: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button_bottom_box: {
    marginHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#f05123',
    borderRadius: 999,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  button_bottom_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

  courseDetail_topicList: {
    marginTop: 20,
  },
  courseDetail_topicList_list: {
    marginTop: 10,
  },
  courseDetail_topicList_item: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginTop: 12,
  },
  courseDetail_topicList_icon: {fontSize: 15},
  courseDetail_topicList_title: {
    color: '#333',
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 10,
  },
  courseDetail_noticeBoxContent: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f05123',
    borderRadius: 10,
    padding: 16,
  },
  courseDetail_noticeBoxContent_icon: {},
  courseDetail_noticeBoxContent_title: {
    color: '#f05123',
    cursor: 'pointer',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 20,
    marginLeft: 10,
    textDecoration: 'underline',
  },
  relatedCourses: {
    marginTop: 30,
  },
  relatedCourses_inner: {
    marginTop: 15,
    flexDirection: 'row',
    flex: 1,
  },
  relatedCourses_thumb: {
    minWidth: 120,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  relatedCourses_info: {flex: 1, marginLeft: 10},
  relatedCourses_title: {
    fontSize: 14,
    fontWeight: '700',
    margin: 0,
    color: '#333',
  },
  relatedCourses_price: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  relatedCourses_old_price: {
    fontSize: 10,
    marginRight: 8,
    textDecoration: 'line-through',
  },
  relatedCourses_main_price: {
    color: '#f05123',
    fontSize: 14,
    fontWeight: '600',
  },
  relatedCourses_desc: {
    fontSize: 12,
    lineHeight: 14,
    marginTop: 5,
    overflow: 'hidden',
  },
  // lesson

  heading: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '700',
  },
  desTime: {
    fontSize: 13,
    marginBottom: 15,
    marginTop: 10,
  },
  addNote: {
    backgroundColor: '#ebebeb',
    borderRadius: 6,
    cursor: 'pointer',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNoteIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  addNotelabel: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  addNoteNum: {
    fontSize: 14,
    fontWeight: '600',
  },
  notiText: {
    wordWrap: 'break-word',
    color: '#474747',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
  },
  noteText: {
    color: '#474747',
    fontSize: 17,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  video: {
    width: Dimens.DEVICE_WIDTH,
    height: 200,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    width: Dimens.DEVICE_WIDTH,
    height: '100%',
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBar_toggle_btn: {
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 7,
    height: 50,
    zIndex: 2,
    paddingTop: getSize.m(5),
    paddingBottom: getSize.m(5),
  },
  actionBar_group_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimens.DEVICE_WIDTH,
    marginLeft: getSize.m(10),
  },
  actionBar_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 999,
    cursor: 'pointer',
    fontSize: 16,
    height: 38,
    margin: 0,
    width: 38,
  },
  actionBar_btn: {
    marginRight: 20,
  },
  actionBar_text: {
    color: '#404040',
    fontSize: 14,
    fontWeight: '600',
  },
  actionBar_icon_text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBar_btn_primary: {
    marginRight: 20,
    borderRadius: 6,
    cursor: 'pointer',
    opacity: 0.5,
    pointerEvents: 'none',
    borderWidth: 2,
    borderColor: '#f05123',
    color: '#f05123',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBar_text_primary: {
    color: '#f05123',
    fontSize: 14,
    fontWeight: '600',
  },
  // modal
  containerModal: {
    // flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 0,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  modalHeader__title: {
    fontSize: 18,
    lineHeight: 20,
    margin: 0,
    fontWeight: '600',
  },
  modalHeader__btn: {},
  modalHeader__btn_text: {fontSize: 20, marginRight: 8},
  modalContent: {marginTop: 10},
  trackItem_wrapper: {
    backgroundColor: '#f7f8fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dedfe0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 20,
    zIndex: 2,
  },
  trackItem__title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    margin: 0,
  },
  trackItem__icon: {},
  trackItem_steps_list: {},
  stepItem_wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f0512333',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  stepItem__info: {},
  stepItem_title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  stepItem__desc: {fontSize: 12},
  stepItem_icon_box: {},
  containerModalNote: {
    backgroundColor: '#ecf0f1',
    marginTop: 0,
    position: 'relative',
  },
  modalNote: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0000004a',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    shadowColor: '#000000',
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 10,
  },
  modalContentNote: {
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 20,
  },
  inputNote: {},
  modalButtonGr: {
    flexDirection: 'row',
  },
  modal_bottom_btn: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 20,
  },
  modal_button_btn_text: {color: '#fff'},
  modal_bottom_btn_primary: {
    padding: 10,
    backgroundColor: '#f05123',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modal_button_btn_text_primary: {
    color: '#fff',
  },
  stepItem_List: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
  },
  courseBottom: {
    height: 80,
  },
});
