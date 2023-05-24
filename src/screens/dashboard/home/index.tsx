/* eslint-disable eqeqeq */
import {
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {JWT_KEY} from '@base/common/Constants';
import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {
  BLOG_DETAIL_SCREEN,
  BLOG_SCREEN,
  COURSE_DETAIL_SCREEN,
  COURSE_SCREEN,
  LOGIN_SCREEN,
} from 'navigation/screen';
import CustomCarousel from './carousel';
import LearnService from '../../../domain/learn.service';
import {notifyInvalid} from '@base/utils/Utils';
import Helper from '@base/utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import {IUserState, actionLogout, setAccount} from '@redux/slices/accountSlice';
import {IAppState, setLoading} from '@redux/slices/appSlice';
import UserService from 'domain/user.service';
import {Images} from '@assets/images';
import {getSize} from '@base/common/responsive';
import ModalError from '@components/ModalError';
import {IRootState} from '@redux/store';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const accessToken = Helper.getDataStored(JWT_KEY);
  const learnService = new LearnService();
  const userService = new UserService();
  const [dataCourse, setDataCourse] = useState([]);
  const [dataVip, setDataVip] = useState([]);
  const [dataIscoming, setDataIscoming] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const distpatch = useDispatch();
  const [blogs, setBlogs] = React.useState([]);
  const [err, setErr] = useState(false);

  const formatterDate = new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const handleCloseModal = () => setErr(false);

  const getCourse = async () => {
    try {
      dispatch(setLoading(true));
      const {data} = await learnService.getCourse();
      if (data.statusCode !== 200) {
        dispatch(setLoading(false));
        throw data.returnValue.message;
      } else {
        notifyInvalid('Lấy dữ liệu thành công!');
        setDataIscoming(data.returnValue.data?.filter(item => item.type == 2));
        setDataCourse(data.returnValue.data?.filter(item => item.type == 0));
        setDataVip(data.returnValue.data?.filter(item => item.type == 1));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      notifyInvalid(error);
    }
  };
  const getUserCourse = async () => {
    if (accessToken != null) {
      try {
        const {data} = await learnService.userCourse();
        if (!data) {
          handleLogout();
          return;
        }
        if (data?.statusCode !== 200) {
          dispatch(setLoading(false));
          throw data.returnValue.message;
        } else {
          notifyInvalid('Lấy dữ liệu thành công!');
          setDataUser(data.returnValue.data);
          dispatch(setLoading(false));
        }
      } catch (error) {
        dispatch(setLoading(false));
        notifyInvalid(error);
      }
    }
  };
  const getBlog = async () => {
    const res = await userService.getBlogAll();
    if (res) {
      setBlogs(res?.returnValue?.data?.data);
      distpatch(setLoading(false));
    } else {
      distpatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (focus == true) {
      // if condition required here because it will call the function even when you are not focused in the screen as well, because we passed it as a dependencies to useEffect hook
      getCourse();
      getUserCourse();
      getBlog();
    }
  }, [navigation, focus]);

  const handleLogout = async () => {
    await dispatch(actionLogout());
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <CustomCarousel />
        <Block style={styles.content}>
          <Text style={styles.textIntro}>
            145.436+
            <Text style={styles.textIntroNormal}>người khác cũng học</Text>{' '}
          </Text>
          {dataUser.length > 0 && (
            <Block style={styles.sectionList}>
              <Block style={styles.sectionListTab}>
                <Text style={styles.sectionListTitle}>Khóa đang học</Text>
                <TouchableOpacity
                  style={styles.buttonText}
                  onPress={() => {
                    navigation.navigate(COURSE_SCREEN);
                  }}>
                  <Text style={styles.buttonText}>Tất cả</Text>
                </TouchableOpacity>
              </Block>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Block style={styles.sectionListMain}>
                  {dataUser?.map((item: any, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        navigation.navigate(COURSE_DETAIL_SCREEN, {
                          id: item?.course?.id,
                        })
                      }>
                      <Block style={styles.learningItem}>
                        <Block style={styles.imgItem}>
                          <Image
                            style={styles.img}
                            source={{uri: item?.course?.img}}
                          />
                        </Block>
                        <Text style={styles.learningText} numberOfLines={2}>
                          {item?.course?.name}
                        </Text>
                      </Block>
                    </TouchableOpacity>
                  ))}
                </Block>
              </ScrollView>
            </Block>
          )}
          <Block style={styles.sectionList}>
            <Block style={styles.sectionListTab}>
              <Text style={styles.sectionListTitle}>Khóa học Sắp ra mắt</Text>
              <TouchableOpacity
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate(COURSE_SCREEN);
                }}>
                <Text style={styles.buttonText}>Tất cả</Text>
              </TouchableOpacity>
            </Block>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <Block style={styles.sectionListMainDisable}>
                {dataIscoming?.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      // navigation.navigate(COURSE_DETAIL_SCREEN, {
                      //   id: item?.id,
                      // })
                      setErr(true);
                    }}>
                    <Block style={styles.learningItem}>
                      <Block style={styles.imgItem}>
                        <Image style={styles.img} source={{uri: item?.img}} />
                      </Block>
                      <Text style={styles.learningText} numberOfLines={2}>
                        {item?.name}
                      </Text>
                    </Block>
                  </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
          </Block>
          <Block style={styles.sectionList}>
            <Block style={styles.sectionListTab}>
              <Text style={styles.sectionListTitle}>Khóa học Vip</Text>
              <TouchableOpacity
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate(COURSE_SCREEN);
                }}>
                <Text style={styles.buttonText}>Tất cả</Text>
              </TouchableOpacity>
            </Block>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <Block style={styles.sectionListMain}>
                {dataVip.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate(COURSE_DETAIL_SCREEN, {
                        id: item?.id,
                      })
                    }>
                    <Block style={styles.learningItem}>
                      <Block style={styles.imgItem}>
                        {/* <Image style={styles.img} source={item?.img} /> */}
                        <Image style={styles.img} source={{uri: item?.img}} />
                      </Block>
                      <Text style={styles.learningText} numberOfLines={2}>
                        {item?.name}
                      </Text>
                      <Block style={styles.learningPrice}>
                        <Text style={styles.learningTextPriceKm}>
                          {item?.price} xu
                        </Text>
                      </Block>
                    </Block>
                  </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
          </Block>
          <Block style={styles.sectionList}>
            <Block style={styles.sectionListTab}>
              <Text style={styles.sectionListTitle}>Khóa học miến phí</Text>
              <TouchableOpacity
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate(COURSE_SCREEN);
                }}>
                <Text style={styles.buttonText}>Tất cả</Text>
              </TouchableOpacity>
            </Block>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <Block style={styles.sectionListMain}>
                {dataCourse.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate(COURSE_DETAIL_SCREEN, {
                        id: item?.id,
                      })
                    }>
                    <Block style={styles.learningItem}>
                      <Block style={styles.imgItem}>
                        {/* <Image style={styles.img} source={item?.img} /> */}
                        <Image style={styles.img} source={{uri: item?.img}} />
                      </Block>
                      <Text style={styles.learningText} numberOfLines={2}>
                        {item?.name}
                      </Text>
                      <Block style={styles.learningPrice}>
                        <Icon
                          name={'people'}
                          size={getSize.m(18)}
                          color="#ccc"
                          style={styles.learningIcon}
                        />
                        <Text style={styles.learningTextPriceKm}>
                          {item?.totalUsers ? item?.totalUsers : 0}
                        </Text>
                      </Block>
                    </Block>
                  </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
          </Block>
          <Block style={styles.sectionList}>
            <Block style={styles.sectionListTab}>
              <Text style={styles.sectionListTitle}>Bài viết mới nhất</Text>
              <TouchableOpacity
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate(BLOG_SCREEN);
                }}>
                <Text style={styles.buttonText}>Tất cả</Text>
              </TouchableOpacity>
            </Block>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <Block style={styles.sectionListMain}>
                {blogs?.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(BLOG_DETAIL_SCREEN, {
                        id: item?.id,
                      })
                    }
                    key={index}>
                    <Block style={styles.learningItem}>
                      <Block style={styles.imgItem}>
                        <Image style={styles.img} source={{uri: item?.image}} />
                      </Block>
                      <Text style={styles.learningText} numberOfLines={1}>
                        {item?.title}
                      </Text>
                      <Block style={styles.sectionInfo}>
                        <Image style={styles.imgAvt} source={Images.LOGO} />
                        <Text style={styles.infoName}>
                          {item?.author?.username}
                        </Text>
                        <Text style={styles.infoName}>
                          {formatterDate.format(Date.parse(item?.createdAt))}
                        </Text>
                      </Block>
                    </Block>
                  </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
          </Block>
        </Block>
      </ScrollView>
      <ModalError
        isVisible={err ? true : false}
        handleClose={handleCloseModal}
        error="Chưa thể truy cập khóa học sắp ra mắt"
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
