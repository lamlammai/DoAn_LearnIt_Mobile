import React, {useEffect} from 'react';

import {BackHandler, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {Block, Text} from '@components';
import {LOGIN_SCREEN} from 'navigation/screen';

import Color from '@theme/Color';

import styles from './login.style';

const ChangePasswordSuccessScreen = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
  }, []);

  const handleBack = () => {
    navigation.navigate(LOGIN_SCREEN);
    return true;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block
        style={[
          styles.content,
          styles.contentTablet,
          styles.contentSignSuccess,
        ]}>
        <TouchableOpacity
          style={styles.btnBack}
          activeOpacity={0.5}
          onPress={handleBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(10)}
            color={Color.RED}
          />
        </TouchableOpacity>
        <Text style={styles.textSignSuccess}>Đổi mật khẩu thành công</Text>
        <Text style={styles.textTutorial}>chú ý</Text>
        <TouchableOpacity
          onPress={handleBack}
          style={[styles.btnGoLogin && styles.btnGoLoginTablet]}
          activeOpacity={0.5}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default ChangePasswordSuccessScreen;
