import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';
import {Block, Text} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {LICH_SU_SCREEN, NAP_XU_SCREEN} from 'navigation/screen';
import UserService from 'domain/user.service';
import {useDispatch} from 'react-redux';
import {setLoading} from '@redux/slices/appSlice';
const SoDuXuScreen = ({navigation}) => {
  const userService = new UserService();
  const distpatch = useDispatch();
  const [historys, setHistorys] = React.useState([]);

  React.useEffect(() => {
    const getHistory = async () => {
      distpatch(setLoading(true));
      const res = await userService.getHistory();
      if (res?.returnValue?.data) {
        setHistorys(res?.returnValue?.data);
        distpatch(setLoading(false));
      } else {
        distpatch(setLoading(false));
      }
    };
    getHistory();
  }, []);
  console.log('hiss', historys);
  const formatterPrice = new Intl.NumberFormat('vi-VN', {
    hour: '2-digit',
    minute: 'numeric',
  });
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
        <Text style={styles.headerName}>Ví</Text>
        <Text style={styles.icon}>.</Text>
      </Block>
      <Block style={styles.main}>
        <Block style={styles.blockTop}>
          <Text style={styles.blockTitle}>Số dư</Text>
          <Text style={styles.blockValue}>
            {formatterPrice.format(
              historys?.coinAvailable ? historys?.coinAvailable : 0,
            )}
            xu
          </Text>
        </Block>
        <Block style={styles.blockBody}>
          <TouchableOpacity
            style={styles.blockBodyItem}
            onPress={() => navigation.navigate(NAP_XU_SCREEN)}>
            <Icon
              name={'ios-journal-outline'}
              size={getSize.m(24)}
              color="#ffd35a"
              style={styles.blockBodyIcon}
            />
            <Text style={styles.blockBodyName}>Nạp xu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.blockBodyItem}
            onPress={() => navigation.navigate(LICH_SU_SCREEN)}>
            <Icon
              name={'cloud-done-outline'}
              size={getSize.m(24)}
              color="#038ec8"
              style={styles.blockBodyIcon}
            />
            <Text style={styles.blockBodyName}>Lịch sử</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default SoDuXuScreen;
