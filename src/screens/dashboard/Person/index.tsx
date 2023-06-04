import React from 'react';
// import { RadioButton } from 'react-native-paper';
import {TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import {IUserState, actionLogout} from '@redux/slices/accountSlice';
import {useDispatch, useSelector} from 'react-redux';

import {
  BLOG_SAVE_SCREEN,
  JOB_SCREEN,
  LOGIN_SCREEN,
  NAP_XU_SCREEN,
  // PAY_SCREEN,
  SETTING_SCREEN,
  SO_DU_XU_SCREEN,
} from 'navigation/screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import UserService from 'domain/user.service';
import {setLoading} from '@redux/slices/appSlice';
import {Images} from '@assets/images';

export default function UserScreen({navigation}) {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState();
  const service = new UserService();
  React.useEffect(() => {
    console.log('vao');
    const getUser = async () => {
      dispatch(setLoading(true));
      const res = await service.getUser();
      console.log('res', res);
      if (res?.returnValue?.data) {
        setUser(res?.returnValue?.data);
        dispatch(setLoading(false));
      }
    };

    getUser();
  }, []);
  const handleLogout = async () => {
    await dispatch(actionLogout());
    navigation.navigate(LOGIN_SCREEN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Block style={styles.headerUser}>
        <Block style={styles.content}>
          <TouchableOpacity style={styles.headerBody}>
            <Block style={styles.headerThumb}>
              <Image
                source={user?.avatar ? {uri: user?.avatar} : Images.LOGO}
                style={styles.img}
              />
            </Block>
            <Block style={styles.headerInfo}>
              <Text style={styles.headerName}>{user?.username}</Text>
              <Text style={styles.headerSubName}>{user?.email}</Text>
            </Block>
            <Block style={styles.headerTop}>
              <TouchableOpacity style={styles.headerTopNoti}>
                <Icon
                  name={'notifications-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerTopSetting}
                onPress={() => navigation.navigate(SETTING_SCREEN)}>
                <Icon
                  style={styles.iconUser}
                  name={'settings-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
              </TouchableOpacity>
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
      <Block style={styles.main}>
        <Block style={styles.box1}>
          {/* <TouchableOpacity style={styles.mainItem}>
            <Block style={styles.mainItemLeft}>
              <Text style={styles.icon1}>
                <Icon
                  style={styles.icon1}
                  name={'md-ribbon-outline'}
                  size={getSize.m(24)}
                  color={Color.WHITE}
                />
              </Text>
              <Text style={styles.mainItemTilte}>Đang học</Text>
            </Block>
            
          </TouchableOpacity> */}
        </Block>
        <Block style={styles.box1}>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(SO_DU_XU_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'ios-shield-checkmark-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Số dư xu</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(NAP_XU_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'ios-repeat'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Đổi xu</Text>
            </Block>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(PAY_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'md-journal-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />

              <Text style={styles.mainItemTilte}>Nạp xu</Text>
            </Block>
            
          </TouchableOpacity> */}
        </Block>
        <Block style={styles.box1}>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(BLOG_SAVE_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'book-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Bài viết của tôi</Text>
            </Block>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(BLOG_SAVE_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'bookmarks-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Bài viết đã lưu</Text>
            </Block>
            
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(JOB_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'business-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Cơ hội việc làm</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate(SETTING_SCREEN)}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'settings-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Thiết lập tài khoản</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainItem}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'logo-electron'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Giới thiệu</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainItem} onPress={handleLogout}>
            <Block style={styles.mainItemLeft}>
              <Icon
                style={styles.icon1}
                name={'log-out-outline'}
                size={getSize.m(24)}
                color={Color.WHITE}
              />
              <Text style={styles.mainItemTilte}>Đăng xuất</Text>
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </SafeAreaView>
  );
}
