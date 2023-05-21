import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import {
  COURSE_DETAIL_SCREEN,
  LOGIN_SCREEN,
  LOTRINH_SCREEN,
} from 'navigation/screen';
import ModalError from '@components/ModalError';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import LearnService from '../../../domain/learn.service';
import {notifyInvalid} from '@base/utils/Utils';
import {Images} from '@assets/images';
import Helper from '@base/utils/helper';
import {JWT_KEY} from '@base/common/Constants';
import {actionLogout} from '@redux/slices/accountSlice';
import {useDispatch} from 'react-redux';
import {setLoading} from '@redux/slices/appSlice';

export default function CourseScreen({navigation}) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [err, setErr] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const learnService = new LearnService();
  const [dataCourse, setDataCourse] = useState([]);
  const [dataVip, setDataVip] = useState([]);
  const [dataNormal, setDataNormal] = useState([]);
  const [dataIscoming, setDataIscoming] = useState([]);
  const accessToken = Helper.getDataStored(JWT_KEY);

  const handleData = (e: any, i: number) => {
    setDataCourse(e);
    setActive(i);
  };
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
        setDataNormal(data.returnValue.data?.filter(item => item.type == 0));
        setDataVip(data.returnValue.data?.filter(item => item.type == 1));
        setDataCourse(data.returnValue.data?.filter(item => item.type == 2));
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
        if (data.statusCode !== 200) {
          throw data.returnValue.message;
        } else {
          notifyInvalid('Lấy dữ liệu thành công!');
          setDataUser(data.returnValue.data);
        }
      } catch (error) {
        notifyInvalid(error);
      }
    }
  };
  const handleLogout = async () => {
    await dispatch(actionLogout());
    navigation.navigate(LOGIN_SCREEN);
  };
  useEffect(() => {
    getCourse();
    getUserCourse();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Block style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-back'}
            size={getSize.m(24)}
            color={Color.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.headerName}>Khóa học</Text>
        <Text style={styles.icon} />
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Block style={styles.content}>
          <Text style={styles.des}>
            Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học
            miễn phí, chất lượng, nội dung dễ hiểu.
          </Text>
          <Block style={styles.mainBody}>
            <Text style={styles.mainTitle}>Khóa học của bạn</Text>
            {dataUser?.length >= 0 ? (
              <ScrollView
                style={styles.mainList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {dataUser.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(COURSE_DETAIL_SCREEN, {
                        id: item?.course?.id,
                      })
                    }
                    key={index}>
                    <Block style={styles.mainItem}>
                      <Block style={styles.itemThumb}>
                        <Image
                          source={{uri: item?.course?.img}}
                          style={styles.img}
                        />
                      </Block>
                      <Text style={styles.itemTitle}>{item?.course?.name}</Text>
                    </Block>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <p>Bạn chưa đăng ký khóa học nào</p>
            )}
            <Text style={styles.mainTitle}>Khóa học dành cho bạn</Text>
            <ScrollView
              style={styles.mainTab}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <TouchableOpacity onPress={() => handleData(dataIscoming, 1)}>
                <Text
                  style={
                    active === 1
                      ? styles.mainTabTitleActive
                      : styles.mainTabTitle
                  }>
                  Sắp ra mắt
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleData(dataVip, 2)}>
                <Text
                  style={
                    active === 2
                      ? styles.mainTabTitleActive
                      : styles.mainTabTitle
                  }>
                  Khóa học Pro
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleData(dataNormal, 3)}>
                <Text
                  style={
                    active === 3
                      ? styles.mainTabTitleActive
                      : styles.mainTabTitle
                  }>
                  Khóa học miễn phí
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <Block style={styles.mainList}>
              <ScrollView
                style={styles.mainList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {dataCourse.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      active !== 1
                        ? navigation.navigate(COURSE_DETAIL_SCREEN, {
                            id: item?.id,
                          })
                        : setErr(true)
                    }
                    key={index}>
                    <Block
                      style={
                        active !== 1 ? styles.mainItem : styles.mainItemDisable
                      }>
                      <Block style={styles.itemThumb}>
                        <Image source={{uri: item?.img}} style={styles.img} />
                      </Block>
                      <Text style={styles.itemTitle} numberOfLines={2}>
                        {item?.name}
                      </Text>
                    </Block>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Block>
            <Block style={styles.suggestionBox_wrapper}>
              <Text style={styles.suggestionBox_title}>
                Bạn đang tìm kiếm lộ trình học cho người mới?
              </Text>
              <Text style={styles.suggestionBox_des}>
                Các khóa học được thiết kế phù hợp cho người mới, lộ trình học
                rõ ràng, nội dung dễ hiểu.
              </Text>
              <TouchableOpacity
                style={styles.suggestionBox_route}
                onPress={() => navigation.navigate(LOTRINH_SCREEN)}>
                <Text style={styles.suggestionBox_link}>Xem lộ trình</Text>
              </TouchableOpacity>
            </Block>
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
}
