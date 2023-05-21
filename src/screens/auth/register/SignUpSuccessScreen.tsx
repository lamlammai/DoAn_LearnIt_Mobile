import React from 'react';

import {SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {Block, Text} from '@components';
import {LOGIN_SCREEN} from 'navigation/screen';
import Color from '@theme/Color';

import styles from './register.style';

const SignUpSuccessScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
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
          onPress={navigation.goBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(24)}
            color={Color.TEXT_PRIMARY}
          />
        </TouchableOpacity>
        <Text style={styles.textSignSuccess}>Đăng kí thành công</Text>
        <Text style={styles.textTutorial}>Mở Email để xác nhận tài khoản</Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.btnGoLogin, styles.btnGoLoginTablet]}
          activeOpacity={0.5}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default SignUpSuccessScreen;
