import React from 'react';
import {Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';
import {Block, Text} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
const InfomationScreen = ({navigation, route}) => {
  const {id} = route.params;
  console.log('id', id);
  const img =
    'https://res.cloudinary.com/dwld3bqia/image/upload/v1672813307/Course/jvsumeisg3pbtin2ecbs.png';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-back'}
            size={getSize.m(24)}
            color={Color.WHITE}
          />
        </TouchableOpacity>
        <Block style={styles.headerPerson}>
          <Block style={styles.bannerThumb}>
            <Image source={{uri: img}} style={styles.banner} />
          </Block>
          <Block style={styles.avtThumb}>
            <Image source={{uri: img}} style={styles.avt} />
            <Text style={styles.avtName}>Vịt Vịt</Text>
          </Block>
        </Block>
        <Block style={styles.content}>
          <Block style={styles.boxWrapper}>
            <Text style={styles.boxWrapper_title}>Giới thiệu</Text>
            <Block style={styles.boxWrapper__participation}>
              <Text style={styles.boxWrapper__participation_icon}>👨</Text>
              <Text style={styles.boxWrapper__participation_title}>
                Thành viên của
                <Text style={styles.boxWrapper___highlight}>
                  F8 - Học lập trình để đi làm
                </Text>
                từ 8 ngày trước
              </Text>
            </Block>
          </Block>
          <Block style={styles.boxWrapper}>
            <Text style={styles.boxWrapper_title}>
              Các khóa học đã tham gia
            </Text>
            <Block style={styles.boxWrapperList}>
              <Block style={styles.boxWrapperItem}>
                <Block style={styles.boxWrapperImgThumb}>
                  <Image source={{uri: img}} style={styles.img} />
                </Block>
                <Block style={styles.info}>
                  <Text style={styles.boxWrapper_info_title}>
                    Lập trình C++ cơ bản, nâng cao
                  </Text>
                  <Text style={styles.boxWrapper_info_desc} numberOfLines={3}>
                    Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người
                    mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm
                    được các khái niệm căn cơ của lập trình, giúp các bạn có nền
                    tảng vững chắc để chinh phục con đường trở thành một lập
                    trình viên.
                  </Text>
                </Block>
              </Block>
              <Block style={styles.boxWrapperItem}>
                <Block style={styles.boxWrapperImgThumb}>
                  <Image source={{uri: img}} style={styles.img} />
                </Block>
                <Block style={styles.info}>
                  <Text style={styles.boxWrapper_info_title}>
                    Lập trình C++ cơ bản, nâng cao
                  </Text>
                  <Text style={styles.boxWrapper_info_desc} numberOfLines={3}>
                    Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người
                    mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm
                    được các khái niệm căn cơ của lập trình, giúp các bạn có nền
                    tảng vững chắc để chinh phục con đường trở thành một lập
                    trình viên.
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfomationScreen;
