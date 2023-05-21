/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';

import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '@assets/images';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {validateEmail} from '@base/utils/ValidationUtils';
import {Block, Image, Spinner, Text} from '@components';
import ModalErrorComponent from '@components/ModalError';
import AuthService from 'domain/auth.service';
import {RESET_SUCCESS_SCREEN} from 'navigation/screen';
import styles from '@screens/auth/login/login.style';
import Color from '@theme/Color';

import InputComponent from '../components/InputComponent';

const ForgetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleReset = async () => {
    // if (!validateEmail(email)) {
    //   return setError('Sai email');
    // }
    // try {
    //   setLoading(true);
    //   const authService = new AuthService();
    //   const {data} = await authService.resetPassWord('lamlam');
    //   if (data.apiStatus !== 'SUCCESS') {
    //     return setError(data.description);
    //   }
    //   setEmail('');
    //   navigation.navigate(RESET_SUCCESS_SCREEN, email);
    //   setLoading(false);
    // } catch (err) {
    //   setLoading(false);
    // }
    navigation.navigate(RESET_SUCCESS_SCREEN, email);
    setEmail('');
  };

  const onChangeTextEmail = text => setEmail(text);

  const handleCloseModal = () => setError('');

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, styles.contentTablet]}>
        <TouchableOpacity
          style={styles.btnBack}
          activeOpacity={0.5}
          onPress={navigation.goBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(24)}
            color={Color.RED}
          />
        </TouchableOpacity>
        <Block marginTop={20} row alignSelf="center" style={styles.blockLogo}>
          <Image source={Images.LOGO} style={styles.logoLogin} />
          <View style={{display: 'flex'}}>
            <Text style={styles.textTitle}>
              Learn <Text style={styles.textEdu}>IT</Text>
            </Text>
          </View>
        </Block>
        <Block alignCenter marginTop={20}>
          <Text style={styles.textTitleLogin}>Mật khẩu mới</Text>
        </Block>
        <Block marginHorizontal={30} marginTop={90}>
          <InputComponent
            title="Email"
            placeholder="Email"
            onChangeText={onChangeTextEmail}
            value={email}
            editable
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleReset}
            style={styles.btnLogin}>
            <Text style={styles.textLogin}>Mật khẩu mới</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      {/* <ModalErrorComponent
        isVisible={error ? true : false}
        handleClose={handleCloseModal}
        error={error}
      /> */}
      {loading && <Spinner mode={'overlay'} />}
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
