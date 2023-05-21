import React from 'react';
import {Linking, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {Block, Text} from '@components';
import styles from '@screens/auth/login/login.style';
import Color from '@theme/Color';

const ResetSuccessScreen = ({navigation, route}) => {
  const handleOpenEmail = () => {
    Linking.openURL(`mailto:${route.params}`);
  };
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
            color={Color.TEXT_PRIMARY}
          />
        </TouchableOpacity>
        <Block marginTop={20} row alignSelf="center">
          <Text style={styles.textTitle}>Learn</Text>
          <Text style={styles.textEdu}>IT</Text>
        </Block>
        <Block alignCenter marginTop={20}>
          <Text style={styles.textTitleLogin}>Reset Password</Text>
          <Text style={styles.textResetSuccess}>Reset Password</Text>
        </Block>
        <Block marginHorizontal={30} marginTop={110}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleOpenEmail}
            style={[styles.btnLogin, styles.btnResetPasswordTablet]}>
            <Text style={styles.textLogin}>Mở Mail</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default ResetSuccessScreen;
