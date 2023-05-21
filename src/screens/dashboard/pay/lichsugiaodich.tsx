import React from 'react';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import {Block, Text} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import UserService from 'domain/user.service';
import {useDispatch} from 'react-redux';
import {setLoading} from '@redux/slices/appSlice';
import Helper from '@base/utils/helper';
const LichSuGDScreen = ({navigation}) => {
  const userService = new UserService();
  const distpatch = useDispatch();
  const [historys, setHistorys] = React.useState([]);
  const formatterDate = new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  React.useEffect(() => {
    const getHistory = async () => {
      distpatch(setLoading(true));
      const res = await userService.getHistory();
      if (res?.returnValue?.data?.transactions) {
        setHistorys(res?.returnValue?.data?.transactions);
        distpatch(setLoading(false));
      } else {
        distpatch(setLoading(false));
      }
    };
    getHistory();
  }, []);

  const convertCoin = (amount: number) => {
    return amount / 1000;
  };
  const convertLogo = (type: string) => {
    switch (type) {
      case 'VNPAY':
        return 'https://cdn.nhanlucnganhluat.vn/uploads/images/A73E9E13/logo/2020-03/19222904_308450352935921_8689351082334351995_o.jpg';
      default:
        return 'http://media.vietteltelecom.vn/upload//05/68/80/08650e955cd61f5161be492532eda40b0abea8e7.png';
    }
  };
  const convertStatus = (type: string) => {
    switch (type) {
      case '1':
        return 'Thành công';
      case '2':
        return 'Đang xử lý';
      default:
        return 'Thất bại';
    }
  };

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
        <Text style={styles.headerName}>Lịch sử giao dịch</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.main}>
        <Block style={styles.lsHeader}>
          <Text style={styles.lsHeaderTitle}>Hoạt động gần đây</Text>
        </Block>
        <ScrollView style={styles.lsBody}>
          {historys && historys?.length
            ? historys?.map((history: any, index: number) => (
                <Block key={index} style={styles.lsBodyItem}>
                  <Block style={styles.lsBodyItemLeft}>
                    <Block style={styles.lsBodyItemThumb}>
                      <Image
                        source={{uri: convertLogo(history?.wallet)}}
                        style={styles.img}
                      />
                    </Block>
                    <Block style={styles.lsBodyItemInfo}>
                      <Text style={styles.lsBodyItemName}>
                        Đổi{' '}
                        {history?.amount ? convertCoin(history?.amount) : '0'}{' '}
                        xu{' '}
                      </Text>
                      <Text style={styles.lsBodyItemTime}>
                        {formatterDate.format(Date.parse(history?.createdAt))}
                      </Text>
                    </Block>
                  </Block>
                  <Block style={styles.lsBodyItemRight}>
                    <Text style={styles.lsBodyItemPrice}>
                      {history?.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </Text>
                    <Text style={styles.lsBodyItemStatus}>
                      {convertStatus(history?.status)}
                    </Text>
                  </Block>
                </Block>
              ))
            : ''}
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default LichSuGDScreen;
