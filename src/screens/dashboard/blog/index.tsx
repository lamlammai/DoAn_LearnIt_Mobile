import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';
import {BLOG_DETAIL_SCREEN, TOPIC_SCREEN} from 'navigation/screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {useDispatch} from 'react-redux';
import UserService from 'domain/user.service';
import {setLoading} from '@redux/slices/appSlice';
import {Images} from '@assets/images';
import Helper from '@base/utils/helper';

export default function BlogScreen({navigation}) {
  const distpatch = useDispatch();
  const [blogs, setBlogs] = React.useState([]);
  const userService = new UserService();

  React.useEffect(() => {
    const getBlog = async () => {
      const res = await userService.getBlogAll();
      if (res) {
        setBlogs(res?.returnValue?.data?.data);
        distpatch(setLoading(false));
      } else {
        distpatch(setLoading(false));
      }
    };
    distpatch(setLoading(true));
    getBlog();
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
        <Text style={styles.headerName}>Diễn đàn</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <Block style={styles.mainTopic}>
          <Text style={styles.mainTitle}>Bài viết nổi bật</Text>
          <Text style={styles.mainSubTitle}>Các chủ đề được đề xuất</Text>
          <Block style={styles.mainList}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'FRONTEND',
                  name: 'Front-end',
                })
              }>
              <Text style={styles.mainItemText}>Front-end </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'BACKEND',
                  name: 'Back-end',
                })
              }>
              <Text style={styles.mainItemText}>Back-end </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'BASIC',
                  name: 'Basic',
                })
              }>
              <Text style={styles.mainItemText}>Basic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'MOBILE',
                  name: 'Mobile',
                })
              }>
              <Text style={styles.mainItemText}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'DEVOPS',
                  name: 'Devops',
                })
              }>
              <Text style={styles.mainItemText}>Devops</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TOPIC_SCREEN, {
                  topic: 'OTHERS',
                  name: 'Others',
                })
              }>
              <Text style={styles.mainItemText}>Others</Text>
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Block style={styles.blogList}>
            {blogs?.map((blog: any, key: number) => (
              <Block key={key} style={styles.blogItem}>
                <Block style={styles.blogHeader}>
                  <TouchableOpacity
                    style={styles.blogAuthor}
                    onPress={() =>
                      navigation.navigate(BLOG_DETAIL_SCREEN, {
                        id: blog?.id,
                      })
                    }>
                    <Block style={styles.blogAvt}>
                      {/* <Image style={styles.imgAvt} source={{uri: blog?.author?.avt}} /> */}
                      <Image style={styles.imgAvt} source={Images.LOGO} />
                    </Block>
                    <Text style={styles.blogName}>
                      {blog?.author?.username}
                    </Text>
                  </TouchableOpacity>
                </Block>
                <TouchableOpacity
                  style={styles.blogMain}
                  onPress={() =>
                    navigation.navigate(BLOG_DETAIL_SCREEN, {
                      id: blog?.id,
                    })
                  }>
                  <Image source={{uri: blog.image}} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.blogContent}
                  onPress={() =>
                    navigation.navigate(BLOG_DETAIL_SCREEN, {
                      id: blog?.id,
                    })
                  }>
                  <Text style={styles.blogTitle} numberOfLines={2}>
                    {blog?.title}
                  </Text>
                  <Text style={styles.blogTime}>
                    {Helper.formatDate(blog?.createdAt)}
                  </Text>
                </TouchableOpacity>
              </Block>
            ))}
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
}
