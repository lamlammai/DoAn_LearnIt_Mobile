/* eslint-disable eqeqeq */
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import LearnService from '../../../domain/learn.service';
import {notifyInvalid} from '@base/utils/Utils';
import Color from '@theme/Color';
import {COURSE_DETAIL_SCREEN, LEARNING} from 'navigation/screen';
export default function LotrinhDetailScreen({navigation, route}) {
  const learnService = new LearnService();
  const [dataCourse, setDataCourse] = useState([]);
  const {data1} = route.params;
  const img =
    'https://res.cloudinary.com/dwld3bqia/image/upload/v1672813307/Course/jvsumeisg3pbtin2ecbs.png';
  const getCourse = async () => {
    try {
      const {data} = await learnService.getCourse();
      if (data.statusCode !== 200) {
        throw data.returnValue.message;
      } else {
        notifyInvalid('Lấy dữ liệu thành công!');
        setDataCourse(
          data.returnValue.data?.filter(item => item.path == data1.path),
        );
      }
    } catch (error) {
      notifyInvalid(error);
    }
  };
  useEffect(() => {
    getCourse();
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
        <Text style={styles.headerName}>{data1.title}</Text>
        <Text style={styles.icon} />
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Block style={styles.content}>
          <Text style={styles.pathDetail_heading}>{data1.title}</Text>
          <Block style={styles.pathDetail_Desc}>
            <Text style={styles.pathDetail_des}>{data1.detail}</Text>
            <Text style={styles.pathDetail_des}>
              Dưới đây là các khóa học LEARNIT đã tạo ra dành cho bất cứ ai theo
              đuổi sự nghiệp trở thành một lập trình viên {data1.path}.
            </Text>
            <Text style={styles.pathDetail_quote}>
              Các khóa học có thể chưa đầy đủ, LEARNIT vẫn đang nỗ lực hoàn
              thiện trong thời gian sớm nhất.
            </Text>
          </Block>
          <Block style={styles.pathDetailGroup}>
            <Block style={styles.pathDetailGroupBody}>
              {dataCourse?.map((item, index) => (
                <Block style={styles.pathDetailGroupItem} key={index}>
                  <Block style={styles.pathDetailThumb}>
                    <Image source={{uri: item?.img}} style={styles.img} />
                  </Block>
                  <Block style={styles.pathDetailInfo}>
                    <Text style={styles.pathDetailInfotitle}>{item?.name}</Text>
                    <Text style={styles.pathDetailInfoPrice}>
                      {item?.price == 0 ? 'Miễn phí' : `${item?.price} xu`}
                    </Text>
                    <Text style={styles.pathDetailInfoDesc} numberOfLines={3}>
                      {item?.description}
                    </Text>
                  </Block>
                  <TouchableOpacity
                    style={styles.btnBox}
                    onPress={() =>
                      navigation.navigate(COURSE_DETAIL_SCREEN, {
                        id: item?.id,
                      })
                    }>
                    <Text style={styles.btnText}>Chi tiết</Text>
                  </TouchableOpacity>
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
