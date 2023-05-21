import React from 'react';

import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Images} from '@assets/images';
import Dimens from '@base/common/Dimens';
import Styles from '@base/common/Styles';
import {Block, Image, Text} from '@components';
import {LOGIN_SCREEN} from '../../../navigation/screen';
import {setNotifyFirstBoot} from '@redux/slices/appSlice';

import styles from './onboarding.style';

const IntroNotifyScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleNotify = () => {
    dispatch(setNotifyFirstBoot({notify: true}));
    navigation.reset({
      index: 0,
      routes: [{name: LOGIN_SCREEN}],
    });
  };

  const handleSkip = () => {
    dispatch(setNotifyFirstBoot({notify: false}));
    navigation.reset({
      index: 0,
      routes: [{name: LOGIN_SCREEN}],
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block row alignCenter alignSelf="center">
        <Text style={styles.textTitle}>Learn</Text>
        <Text style={styles.textTitleEdu}>IT</Text>
      </Block>
      <Image
        source={Images.LOGO}
        style={styles.imgIntro}
        width={Dimens.DEVICE_WIDTH}
        height={(Dimens.DEVICE_WIDTH * 1172) / 1650}
      />
      <Block style={styles.content}>
        <Text style={styles.textWelcome}>Đăng ký ngay!</Text>
        <Text style={styles.noteWelcome}>
          Nhận thông báo lịch học, sự kiện, và các hoạt động khác đang diễn ra
          của LEARN IT!
        </Text>
      </Block>
      <Block style={[styles.btnIntroNotify]}>
        <TouchableOpacity
          onPress={handleNotify}
          activeOpacity={0.5}
          style={styles.btnTurnOn}>
          <Text style={styles.textNext}>Bật thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleSkip}
          style={styles.btnTurnOff}>
          <Text style={styles.textTurnOff}>Bỏ qua</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default IntroNotifyScreen;
