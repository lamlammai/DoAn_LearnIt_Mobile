/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Images} from '@assets/images/index';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {Block, Image, Spinner, Text} from '@components';
import {JWT_KEY} from '@base/common/Constants';
import Helper from '@base/utils/helper';
import {useDispatch} from 'react-redux';

import {
  FORGET_PASSWORD_SCREEN,
  REGISTER_SCREEN,
  TAB_NAVIGATION,
} from 'navigation/screen';
import {notifyInvalid} from '@base/utils/Utils';
import styles from './login.style';
import Color from '@theme/Color';
import InputComponent from '../components/InputComponent';
import AuthService from '../../../domain/auth.service';
import {setAccount, setToken} from '@redux/slices/accountSlice';
import {setLoading} from '@redux/slices/appSlice';
import UserService from 'domain/user.service';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useDispatch();

  const service = new UserService();
  const handleForgetPass = () => navigation.navigate(FORGET_PASSWORD_SCREEN);

  const handleLogin = async () => {
    try {
      if (!email) {
        throw 'Email không đúng định dạng';
      }
      if (!password) {
        throw 'Mật khẩu không đúng';
      }
      dispatch(setLoading(true));
      // navigation.navigate(TAB_NAVIGATION);
      const authService = new AuthService();
      const {data} = await authService.login(email, password);
      if (data.statusCode !== 200) {
        throw data.message;
      }
      await Helper.storeData(JWT_KEY, data.returnValue.data.accessToken);
      const infoUser = await service.getUser(data.returnValue.data.accessToken);

      navigation.navigate(TAB_NAVIGATION);
      dispatch(setLoading(false));
      // infoUser.data.code === 200 &&
      dispatch(setAccount(infoUser?.returnValue?.data));
    } catch (error) {
      dispatch(setLoading(false));
      notifyInvalid(error);
      console.log('error', {error});
    }
  };
  const handleSignUp = async () => {
    navigation.navigate(REGISTER_SCREEN);
  };
  return (
    <SafeAreaView>
      <Block style={[styles.content, styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row alignSelf="center" style={styles.blockLogo}>
            <Image source={Images.LOGO} style={styles.logoLogin} />
            <View style={{display: 'flex'}}>
              <Text style={styles.textTitle}>
                Learn <Text style={styles.textEdu}>IT</Text>
              </Text>
            </View>
          </Block>
          <Block alignCenter marginTop={20}>
            <Text style={styles.textTitleLogin}>Đăng nhập</Text>
          </Block>
          <Block marginHorizontal={30} marginTop={60}>
            <InputComponent
              marginBottom={25}
              title="Email"
              placeholder="Nhập email"
              value={email}
              onChangeText={setEmail}
              editable
            />
            <InputComponent
              title="Mật khẩu"
              secureTextEntry
              placeholder="Nhập mật khẩu"
              value={password}
              onChangeText={setPassword}
              editable
            />
            <Block marginTop={20} style={styles.btnGroup}>
              <TouchableOpacity
                style={styles.btnForget}
                onPress={handleForgetPass}
                activeOpacity={0.5}>
                <Text style={styles.textForgetPassword}>Quên mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnForget}
                onPress={handleSignUp}
                activeOpacity={0.5}>
                <Text style={styles.textForgetPassword}>Đăng ký</Text>
              </TouchableOpacity>
            </Block>

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={handleLogin}
              activeOpacity={0.5}>
              <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default LoginScreen;
