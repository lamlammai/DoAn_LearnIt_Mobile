import React, {useState} from 'react';
import {TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {Block, Image, Text} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {useDispatch} from 'react-redux';
import UserService from 'domain/user.service';
import {setLoading} from '@redux/slices/appSlice';
import Helper from '@base/utils/helper';
import {Images} from '@assets/images';

const BlogSaveScreen = ({navigation}) => {
  const [active, setActive] = useState(1);
  const distpacth = useDispatch();
  const service = new UserService();
  const [listBlog, setListBlog] = React.useState();
  const handleBlog = (i: number) => {
    setActive(i);
  };
  React.useEffect(() => {
    const getListBlog = async () => {
      const res = await service.getBlogUser();
      if (res?.returnValue?.data) {
        setListBlog(res?.returnValue?.data?.data);
        distpacth(setLoading(false));
      }
      distpacth(setLoading(false));
    };
    distpacth(setLoading(true));
    getListBlog();
  }, []);
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
        <Text style={styles.headerName}>Bài viết của tôi</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        {/* <Block style={styles.headingTabs_tabs}>
          <TouchableOpacity
            onPress={() => handleBlog(1)}
            style={
              active === 1
                ? styles.headingTabs_item_active
                : styles.headingTabs_item
            }>
            <Text
              style={
                active === 1
                  ? styles.headingTabs_tabs_text_active
                  : styles.headingTabs_tabs_text
              }>
              Đã viết
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              active === 2
                ? styles.headingTabs_item_active
                : styles.headingTabs_item
            }
            onPress={() => handleBlog(2)}>
            <Text
              style={
                active === 2
                  ? styles.headingTabs_tabs_text_active
                  : styles.headingTabs_tabs_text
              }>
              Đã lưu
            </Text>
          </TouchableOpacity>
        </Block> */}
        <Block style={styles.blogcontent}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Block style={styles.blogcontentList}>
              {listBlog?.length > 0 ? (
                listBlog?.map((item: any, key: number) => (
                  <Block style={styles.blogcontentItem} key={key}>
                    <Text style={styles.blogcontentItem_title}>
                      {item?.title}
                    </Text>
                    <Block style={styles.blogcontentItem_author}>
                      <Text style={styles.blogcontentItem_time}>
                        {Helper.formatDate(item?.createdAt)}
                      </Text>
                      <Block style={styles.blogcontentItem_group}>
                        <Text style={styles.blogcontentItem_name}>
                          Tác giả:
                        </Text>
                        <Text style={styles.blogcontentItem_strong}>
                          {item?.author?.username}
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                ))
              ) : (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}>
                  <Block style={styles.nodataMain}>
                    <Block style={styles.nodata}>
                      <Image source={Images.NODATA} style={styles.imgNodata} />
                    </Block>
                    <Text style={styles.textNodata}>
                      Bạn chưa viết bài viết nào
                    </Text>
                  </Block>
                </ScrollView>
              )}
            </Block>
          </ScrollView>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default BlogSaveScreen;
