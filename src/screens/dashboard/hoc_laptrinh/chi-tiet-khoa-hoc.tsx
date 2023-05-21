/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import {COURSE_DETAIL_SCREEN, LEARNING, NAP_XU_SCREEN} from 'navigation/screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import {notifyInvalid} from '@base/utils/Utils';
import LearnService from '../../../domain/learn.service';
import Color from '@theme/Color';
import {useDispatch} from 'react-redux';
import {setLoading} from '@redux/slices/appSlice';
import ModalError from '@components/ModalError';
import ModalConfirm from '@components/ModalConfirm';
import ModalErrorCouse from '@components/ModalError/ModalErrorCouse';

const DetailCourseScreen = ({navigation, route}) => {
  const {id} = route.params;
  const distpatch = useDispatch();
  const img =
    'https://res.cloudinary.com/dwld3bqia/image/upload/v1672813307/Course/jvsumeisg3pbtin2ecbs.png';
  const [dataCourse, setDataCourse] = useState<any>({});
  const [goal1, setGoal] = useState();
  const [requirement1, setRequirement] = useState();
  const [lesson, setLesson] = useState<any>([]);
  const [err, setErr] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const learnService = new LearnService();
  const getCourse = async () => {
    try {
      distpatch(setLoading(true));
      const {data} = await learnService.getCourseId(id);
      if (data.statusCode !== 200) {
        distpatch(setLoading(false));
        throw data.returnValue.message;
      } else {
        // eslint-disable-next-line quotes

        notifyInvalid('Lấy dữ liệu thành công!');
        setDataCourse(data.returnValue.data);
        setGoal(data.returnValue.data.goal.split('\n'));
        setRequirement(data.returnValue.data.requirement.split('\n'));
        setLesson(data.returnValue.data?.lessonList);
        distpatch(setLoading(false));
      }
    } catch (error) {
      distpatch(setLoading(true));
      notifyInvalid(error);
    }
  };
  const AddCourse = async () => {
    try {
      const {data} = await learnService.registerCourse(dataCourse?.id);

      if (data?.statusCode === 200) {
        navigation.navigate(LEARNING, {
          id: data?.id,
          lesson: dataCourse?.lessonList?.id,
        });
      } else {
        setErr(true);
        // ModalError(
        //   'Khóa học đang bị lỗi hoặc bạn không đủ xu để mở khóa học này, Vui lòng đổi sang khóa học khác! ',
        // );
      }
    } catch (error) {
      notifyInvalid(error);
    }
  };
  const getCurrentLesson = async () => {
    try {
      const res = await learnService.currentLesson(dataCourse?.id);
      if (res.statusCode === 200) {
        navigation.navigate(LEARNING, {
          id: dataCourse?.id,
          lesson: res?.returnValue?.data?.currentLesson ?? 0,
        });
      }
    } catch (error) {
      notifyInvalid(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);

  const handleConFirmAdd = () => {
    setConfirm(true);
  };

  const handleCloseModal = () => setErr(false);

  const [relatedCourses, setRelatedCourses] = React.useState([]);
  React.useEffect(() => {
    const getListCourse = async (type: any) => {
      try {
        distpatch(setLoading(true));
        const {data} = await learnService.getCourse();
        if (data.statusCode !== 200) {
          distpatch(setLoading(false));
          throw data.returnValue.message;
        } else {
          notifyInvalid('Lấy dữ liệu thành công!');
          setRelatedCourses(
            data.returnValue.data?.filter((item: any) => item.path === type),
          );
          distpatch(setLoading(false));
        }
      } catch (error) {
        distpatch(setLoading(false));
        notifyInvalid(error);
      }
    };
    if (dataCourse?.path !== null && dataCourse?.path !== undefined) {
      getListCourse(dataCourse?.path);
    }
  }, [id, dataCourse?.path]);

  return (
    <SafeAreaView style={styles.container}>
      <ModalErrorCouse
        isVisible={err ? true : false}
        handleClose={handleCloseModal}
        onChange={value => value && navigation.navigate(NAP_XU_SCREEN)}
        error="Khóa học đang bị lỗi hoặc bạn không đủ xu để mở khóa học này, Vui lòng đổi sang khóa học khác!"
      />
      <ModalConfirm
        handleClose={() => setConfirm(false)}
        isVisible={confirm}
        onChange={(value: boolean) => value && AddCourse()}
        title={'Bạn muốn mở khóa học ' + dataCourse?.name ?? ''}
        msg=""
      />
      <Block style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-back'}
            size={getSize.m(24)}
            color={Color.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.headerName}>Chi tiết khóa học</Text>
        <Text style={styles.icon}>.</Text>
      </Block>
      <Block style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.courseDetailName}>{dataCourse?.name}</Text>
          <Text style={styles.courseDetail_textContent}>
            {dataCourse?.description}
          </Text>
          <Block style={styles.courseDetail_purchaseBadge}>
            <Text style={styles.courseDetail_purchasePrice}>
              {dataCourse
                ? dataCourse?.price == 0
                  ? 'Miễn phí'
                  : `${dataCourse?.price} xu`
                : ''}
            </Text>
            <Block style={styles.courseDetail_List}>
              <Block style={styles.courseDetail_Item}>
                <Icon
                  style={styles.courseDetail_ItemIcon}
                  name={'golf-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
                <Text style={styles.courseDetail_ItemText}>
                  Trình độ:
                  {dataCourse?.level == 0
                    ? 'Cơ bản'
                    : dataCourse?.level == 1
                    ? 'Khá'
                    : 'Nâng cao'}
                </Text>
              </Block>
              <Block style={styles.courseDetail_Item}>
                <Icon
                  style={styles.courseDetail_ItemIcon}
                  name={'git-branch-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
                <Text style={styles.courseDetail_ItemText}>
                  Tổng số
                  <Text style={styles.courseDetail_ItemTextStrong}>19</Text> bài
                  học
                </Text>
              </Block>
              <Block style={styles.courseDetail_Item}>
                <Icon
                  style={styles.courseDetail_ItemIcon}
                  name={'gift-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
                <Text style={styles.courseDetail_ItemText}>
                  Học mọi lúc, mọi nơi
                </Text>
              </Block>
            </Block>
          </Block>
          <Block style={styles.courseDetail_topicList}>
            <Text style={styles.courseDetailName}>Bạn sẽ học được gì?</Text>
            <Block style={styles.courseDetail_topicList_list}>
              {goal1?.map((element, key) => (
                <Block style={styles.courseDetail_topicList_item} key={key}>
                  <Icon
                    style={styles.courseDetail_topicList_icon}
                    name={'checkmark-outline'}
                    size={getSize.m(24)}
                    color={Color.RED}
                  />
                  <Text style={styles.courseDetail_topicList_title}>
                    {element}
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
          <Block style={styles.courseDetail_noticeBoxContent}>
            <Text style={styles.courseDetail_noticeBoxContent_icon}>📍</Text>
            <Text style={styles.courseDetail_noticeBoxContent_title}>
              Xem các khóa học khác có thể là sự lựa chọn thay thế cho khóa học
              này
            </Text>
          </Block>
          <Block style={styles.curriculumOfCourse}>
            <Text style={styles.curriculumOfCourseTitle}>
              Nội dung khóa học
            </Text>
            <Block style={styles.curriculumOfCourseInfo}>
              <Text style={styles.curriculumOfCourseValue}>
                <Text style={styles.curriculumOfCourseStrong}>
                  {' '}
                  {lesson?.length}{' '}
                </Text>
                bài học
              </Text>
              <Text style={styles.curriculumOfCourseStrong}>
                02 giờ 49 phút
              </Text>
            </Block>
            <Block style={styles.curriculumOfCourse_panelGroup}>
              {lesson?.map((e, key) => (
                <Block style={styles.curriculumOfCourse_contentItem} key={key}>
                  <Block style={styles.curriculumOfCourse_panelBox}>
                    <Icon
                      name={'play-skip-forward-outline'}
                      size={getSize.m(24)}
                      color={Color.WHITE}
                      style={styles.curriculumOfCourseContentIcon}
                    />
                    <Text style={styles.curriculumOfCourseContentValue}>
                      {key + 1}. {e?.name}
                    </Text>
                  </Block>
                  <Text style={styles.curriculumOfCourseContentTime}>
                    20:77
                  </Text>
                </Block>
              ))}
              {/* <SubjectItem />
              <SubjectItem />
              <SubjectItem /> */}
            </Block>
          </Block>
          <Block style={styles.courseDetail_topicList}>
            <Text style={styles.courseDetailName}>Yêu cầu</Text>
            <Block style={styles.courseDetail_topicList_list}>
              {requirement1?.map((element, key) => (
                <Block style={styles.courseDetail_topicList_item} key={key}>
                  <Icon
                    style={styles.courseDetail_topicList_icon}
                    name={'checkmark-outline'}
                    size={getSize.m(24)}
                    color={Color.RED}
                  />
                  <Text style={styles.courseDetail_topicList_title}>
                    {element}
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
          <Block style={styles.relatedCourses}>
            <Text style={styles.courseDetailName}>Khóa học liên quan</Text>
            {relatedCourses?.length
              ? relatedCourses?.map((item: any) => (
                  <TouchableOpacity
                    key={item?.id}
                    style={styles.relatedCourses_inner}
                    onPress={() => {
                      navigation.navigate(COURSE_DETAIL_SCREEN, {
                        id: item?.id,
                      });
                    }}>
                    <Block style={styles.relatedCourses_thumb}>
                      <Image source={{uri: item?.img}} style={styles.img} />
                    </Block>
                    <Block style={styles.relatedCourses_info}>
                      <Text style={styles.relatedCourses_title}>
                        {item?.name}
                      </Text>
                      <Block style={styles.relatedCourses_price}>
                        {/* <Text style={styles.relatedCourses_old_price}>
                          2.499.000đ
                        </Text> */}
                        <Text style={styles.relatedCourses_main_price}>
                          {item?.price == '0' ? 'Miễn phí' : item?.price + 'xu'}
                        </Text>
                      </Block>
                      <Text
                        style={styles.relatedCourses_desc}
                        numberOfLines={2}>
                        Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm
                        bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học
                        và mua một lần học mãi mãi.
                      </Text>
                    </Block>
                  </TouchableOpacity>
                ))
              : ''}
          </Block>
        </ScrollView>
      </Block>
      <Block style={styles.button_bottom}>
        {dataCourse?.isRegisted == false ? (
          <TouchableOpacity
            style={styles.button_bottom_box}
            onPress={() => handleConFirmAdd()}>
            <Text style={styles.button_bottom_text}>Bắt đầu học</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button_bottom_box}
            onPress={() => getCurrentLesson()}>
            <Text style={styles.button_bottom_text}>Tiếp tục học</Text>
          </TouchableOpacity>
        )}
      </Block>
    </SafeAreaView>
  );
};

export default DetailCourseScreen;

const SubjectItem = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.curriculumOfCourse_panel}
        onPress={() => toggleShow()}>
        <Block style={styles.curriculumOfCourse_panelBox}>
          <Text style={styles.curriculumOfCourseIcon}>+</Text>
          <Text style={styles.curriculumOfCourseheadline}>1. Giới thiệu</Text>
        </Block>
        <Text style={styles.curriculumOfCourseTime}>3 bài học</Text>
      </TouchableOpacity>
      {show && (
        <Block style={styles.curriculumOfCourse_content}>
          <Block style={styles.curriculumOfCourse_contentItem}>
            <Block style={styles.curriculumOfCourse_panelBox}>
              <Text style={styles.curriculumOfCourseContentIcon}>--</Text>
              <Text style={styles.curriculumOfCourseContentValue}>
                1. Giới thiệu khóa học
              </Text>
            </Block>
            <Text style={styles.curriculumOfCourseContentTime}>20:77</Text>
          </Block>
          <Block style={styles.curriculumOfCourse_contentItem}>
            <Block style={styles.curriculumOfCourse_panelBox}>
              <Text style={styles.curriculumOfCourseContentIcon}>--</Text>
              <Text style={styles.curriculumOfCourseContentValue}>
                1. Giới thiệu khóa học
              </Text>
            </Block>
            <Text style={styles.curriculumOfCourseContentTime}>20:77</Text>
          </Block>
        </Block>
      )}
    </SafeAreaView>
  );
};
