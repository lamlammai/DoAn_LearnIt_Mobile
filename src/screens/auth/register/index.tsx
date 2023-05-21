/* eslint-disable @typescript-eslint/no-unused-vars */
import {debounce} from 'lodash';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {Images} from '@assets/images';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {FORM_REGISTER} from '@base/common/__Tests__';
import {validateEmail} from '@base/utils/ValidationUtils';
import {Block, Image, Spinner, Text} from '@components';
import ModalErrorComponent from '@components/ModalError';
import AuthService from 'domain/auth.service';
import {SIGN_UP_SUCCESS_SCREEN} from 'navigation/screen';
import styles from './register.style';
import Color from '@theme/Color';
import InputComponent from '../components/InputComponent';
import {log} from 'react-native-reanimated';

const defaultRegister = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterScreen = ({navigation}) => {
  const authService = new AuthService();
  const [dataSignUp, setDataSignUp] = useState(defaultRegister);
  const [invalid, setInvalid] = useState<number>();
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setInvalid(null);
    try {
      Object.keys(dataSignUp).forEach((item, index) => {
        if (index === 0 && dataSignUp[item].length === 0) {
          setInvalid(index);
          throw 'Nhập tên của bạn';
        }
        if (index === 1 && !validateEmail(dataSignUp[item])) {
          setInvalid(index);
          throw 'Email ko đúng định dạng';
        }

        if (
          (index === 2 && dataSignUp[item].length === 0) ||
          (index === 3 && dataSignUp[item].length === 0)
        ) {
          setInvalid(index);
          throw 'Password vui lòng nhập';
        }

        if (index === 3 && dataSignUp.password !== dataSignUp.confirmPassword) {
          setInvalid(index);
          throw 'Không khớp';
        }
      });
      setLoading(true);
      const {data} = await authService.registerAccount(dataSignUp);

      if (data.statusCode !== 200) {
        throw data.data.message;
        // throw data.description;
      }

      setLoading(false);
      navigation.popToTop();
      navigation.navigate(SIGN_UP_SUCCESS_SCREEN);
    } catch (err) {
      setLoading(false);
      setError(`${err}`);
    }
    // navigation.navigate(SIGN_UP_SUCCESS_SCREEN);
  };

  const onChangeText = (text, item) => {
    const _dataSignUp = JSON.parse(JSON.stringify(dataSignUp));
    _dataSignUp[item.key] = text;
    setDataSignUp(_dataSignUp);
  };

  // const handleCloseModal = () => setError();

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content]}>
        <Block marginTop={40} row alignSelf="center" style={styles.blockLogo}>
          <Image source={Images.LOGO} style={styles.logoLogin} />
          <View style={{display: 'flex'}}>
            <Text style={styles.textTitle}>
              Learn <Text style={styles.textEdu}>IT</Text>
            </Text>
          </View>
        </Block>
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
        <Block alignCenter marginTop={10} marginBottom={10}>
          <Text style={styles.textTitleLogin}>Đăng ký</Text>
          <Block row alignCenter>
            <Text style={styles.textNoAccount}>Đã có tài khoản?</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={navigation.goBack}>
              <Text style={styles.textRegister}>Đăng nhập</Text>
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.formData} marginTop={10}>
            {FORM_REGISTER.map(item => {
              const _onChangeText = text => onChangeText(text, item);
              return (
                <InputComponent
                  key={item.id}
                  title={item.title}
                  placeholder={item.placeholder}
                  invalid={invalid === item.id}
                  onChangeText={debounce(_onChangeText, 200)}
                  secureTextEntry={item.security}
                  marginBottom={20}
                  editable
                />
              );
            })}
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.5}
              onPress={handleSignUp}>
              <Text style={styles.textLogin}>Đăng ký</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      {/* <ModalErrorComponent
        isVisible={error ? true : false}
        handleClose={handleCloseModal}
        error={error}
      /> */}
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default RegisterScreen;
