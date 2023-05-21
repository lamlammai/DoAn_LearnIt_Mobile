import {PAY_SCREEN} from 'navigation/screen';
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
} from 'react-native';
import {Block} from '@components';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {Images} from '@assets/images';
export default function Paycreen({navigation}) {
  const PayList = [
    {
      coin: '10',
      price: 10000,
      img: Images.PAY1,
    },
    {
      coin: '20',
      price: 20000,
      img: Images.PAY2,
    },
    {
      coin: '30',
      price: 30000,
      img: Images.PAY3,
    },
    {
      coin: '40',
      price: 40000,
      img: Images.PAY4,
    },
  ];

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
        <Text style={styles.headerName}>Nạp xu</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <Block style={styles.telecomBox}>
          <Block style={styles.telecomBox_exchange}>
            <Text style={styles.telecomBox_exchange_value}>
              <Text style={styles.telecomBox_exchange_value_strong}>
                10.000
              </Text>
              <Text> đ =</Text>
              <Text style={styles.telecomBox_exchange_value_strong}>10</Text>
              <Text> xu</Text>
            </Text>
          </Block>
          <Block style={styles.telecomBox__list}>
            <Block style={styles.telecomBox_sub}>
              <Text>Thể lệ</Text>
            </Block>
            <Block style={styles.telecomBox_detail}>
              <Text style={styles.telecomBox_value}>
                - Xu để đổi lấy khóa học hoặc thời gian support của giảng viên
              </Text>
              <Text style={styles.telecomBox_value}>
                - Mức điểm đổi tối thiểu: 100 điểm.
              </Text>
              <Text style={styles.telecomBox_value}>
                - Thời gian sử dụng: Không giới hạn.
              </Text>
              <Text style={styles.telecomBox_value}>1 xu = 1.000đ</Text>
            </Block>
          </Block>
        </Block>

        <Block style={styles.exchangePoint}>
          <Text style={styles.exchangePoint__title}>Gói điểm quy đổi</Text>
          <ScrollView
            style={styles.exchangePoint__list}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {PayList.map((item, index) => (
              <ModalScreen navigation={navigation} key={index} data={item} />
            ))}
          </ScrollView>
        </Block>
      </Block>
    </SafeAreaView>
  );
}
const ModalScreen = ({navigation, data}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView>
      <Block style={styles.containerModal}>
        <Modal animationType={'slide'} transparent={true} visible={showModal}>
          <Block style={styles.modal}>
            <Block style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => {
                  setShowModal(!showModal);
                }}>
                <Icon
                  name={'close'}
                  size={getSize.m(24)}
                  style={styles.modalCloseIcon}
                />
              </TouchableOpacity>
              <Block style={styles.modal_endow}>
                <Text style={styles.modal_endow_title}>Xác nhận đổi điểm</Text>
                <Block style={styles.modal_endow_content}>
                  <Block style={styles.modal_endow_images}>
                    <Image
                      source={Images.GIFT}
                      style={styles.modal_endow_img}
                    />
                  </Block>
                  <Block style={styles.modal_endow_exchange}>
                    <Text style={styles.modal_endow_name}>{data.price} đ</Text>
                    <Icon
                      style={styles.modal_endow_icon}
                      name={'swap-horizontal'}
                      size={getSize.m(24)}
                    />
                    <Text style={styles.modal_endow_name}>{data.coin} xu</Text>
                  </Block>
                  <Text style={styles.modal_endow_des}>
                    Xu sẽ được cộng vào tài khoản trong vòng 12 giờ
                  </Text>
                </Block>
                <TouchableOpacity
                  style={styles.modal_endow_btn}
                  onPress={() =>
                    navigation.navigate(PAY_SCREEN, {
                      price: data.price,
                    })
                  }>
                  <Text style={styles.modal_endow_btn_text}>Xác Nhận</Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Modal>
        <TouchableOpacity
          style={styles.exchangePoint_item}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Block style={styles.exchangePoint_item_images}>
            <Image source={data.img} style={styles.img} />
            <Block style={styles.exchangePoint_item_value}>
              <Text style={styles.exchangePoint_item_value_title}>
                {data.coin}
              </Text>
              <Text style={styles.exchangePoint_item_value_subtitle}>xu</Text>
            </Block>
          </Block>
          <Block style={styles.exchangePoint_info}>
            <Icon
              style={styles.exchangePoint_icon}
              name={'logo-bitcoin'}
              size={getSize.m(24)}
            />
            <Text style={styles.exchangePoint_name}>{data.price} đ</Text>
          </Block>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};
