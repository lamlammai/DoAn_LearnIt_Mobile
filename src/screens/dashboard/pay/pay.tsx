import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {RadioButton} from 'react-native-paper';
import {setLoading} from '@redux/slices/appSlice';
import {useDispatch} from 'react-redux';
import UserService from 'domain/user.service';

export default function ThanhtoanScreen({navigation, route}) {
  const distpatch = useDispatch();
  const [checked, setChecked] = React.useState('momo');
  const userService = new UserService();
  const {price} = route.params;
  const img =
    'http://media.vietteltelecom.vn/upload//05/68/80/08650e955cd61f5161be492532eda40b0abea8e7.png';
  const PayOnline = async () => {
    const res = await userService.vnPay(price);
    if (res) {
      // Linking.canOpenURL(res?.returnValue?.data).then(supported => {
      //   if (supported) {
      //     Linking.openURL(res?.returnValue?.data);
      //   } else {
      //     console.log("Don't know how to open URI: " + res?.returnValue?.data);
      //   }
      // });
      distpatch(setLoading(false));
      Linking.openURL(res?.returnValue?.data);
    } else {
      distpatch(setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-back'}
            size={getSize.m(24)}
            color={Color.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.headerName}>Phương thức thanh toán</Text>
        <Text style={styles.icon}>.</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.payment_online}>
          <Text style={styles.payment_online__sub}>
            Chọn phương thức thanh toán*
          </Text>
          <View style={styles.method_payment}>
            <View style={styles.method_payment_item}>
              <View style={styles.method_payment_item_left}>
                <View style={styles.method_payment_item_left_icon}>
                  <Image source={{uri: img}} style={styles.img} />
                </View>
                <View style={styles.method_payment_item_left_detail}>
                  <Text style={styles.method_payment_item_left_detail_name}>
                    Ví Momo
                  </Text>
                </View>
              </View>
              <View style={styles.method_payment_item_right}>
                <RadioButton
                  value="momo"
                  status={checked === 'momo' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('momo')}
                />
              </View>
            </View>
            <View style={styles.method_payment_item}>
              <View style={styles.method_payment_item_left}>
                <View style={styles.method_payment_item_left_icon}>
                  <Image source={{uri: img}} style={styles.img} />
                </View>
                <View style={styles.method_payment_item_left_detail}>
                  <Text style={styles.method_payment_item_left_detail_name}>
                    Ví VNPay
                  </Text>
                </View>
              </View>
              <View style={styles.method_payment_item_right}>
                <RadioButton
                  value="vnpay"
                  status={checked === 'vnpay' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('vnpay')}
                />
              </View>
            </View>
          </View>
          <View style={styles.order_payment}>
            <View style={styles.order_payment_item}>
              <Text style={styles.order_payment_name}>Tổng tiền</Text>
              <Text style={styles.order_payment_value}>{price}đ</Text>
            </View>
            <View style={styles.order_payment_item_last}>
              <Text style={styles.order_payment_name_last}>
                Tổng thanh toán
              </Text>
              <Text style={styles.order_payment_value_last}>{price}đ</Text>
            </View>
          </View>
          <Text style={styles.note}>
            <Text style={styles.note_icon}>$$</Text>
            Nhấn vào "Đồng ý" đồng nghĩa với việc quý khách đồng ý với
            <Text style={styles.note_icon_primary}>
              điều khoản mua hàng và thanh toán của LI
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.order_payment__btn}
            onPress={() => PayOnline()}>
            <Text style={styles.order_payment__btn_primary}>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
