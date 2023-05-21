import React from 'react';

import {SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Block, Text} from '@components';
import {Images} from '@assets/images/index';
import styles from './onboarding.style';
import {INTRO_NOTIFY_SCREEN} from 'navigation/screen';

const OnBoardingScreen = ({navigation}) => {
  const handleNext = () => {
    navigation.reset({
      index: 0,
      routes: [{name: INTRO_NOTIFY_SCREEN}],
    });
  };

  return (
    <SafeAreaView style={styles.contentOnBoard}>
      <Block marginTop={20} row alignCenter alignSelf="center">
        <Text style={styles.textTitle}>Learn</Text>
        <Text style={styles.textTitleEdu}>IT</Text>
      </Block>
      <Image source={Images.LOGO} style={styles.imgIntro} />
      <Block style={styles.content}>
        <Text style={styles.textWelcome}>Chào mừng bạn đến với Learn IT</Text>
        <Text style={styles.noteWelcome}>
          Hãy đăng kí là thành viên để có thể xem, thêm học lập trình online
          cùng với 5000 thành viên khác
        </Text>
      </Block>
      <TouchableOpacity
        onPress={handleNext}
        activeOpacity={0.5}
        style={[styles.btnNext]}>
        <Text style={styles.textNext}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
