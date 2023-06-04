import React, {useState} from 'react';
import {Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import {launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {useDispatch} from 'react-redux';
import UserService from 'domain/user.service';
import {setLoading} from '@redux/slices/appSlice';
import {Images} from '@assets/images';
const SettingScreen = ({navigation}) => {
  const distpatch = useDispatch();

  const CLOUDINARY_CLOUD_NAME = 'ahiho';
  const CLOUDINARY_UPLOAD_PRESET = 'ahiho_prs';
  const service = new UserService();
  const [avatar, setAvatar] = useState(Images.LOGO);
  const [name, setName] = useState('');

  const [user, setUser] = React.useState();
  const makeUploadFormData = photo => {
    const data = new FormData();
    data.append('file', `data:image/jpeg;base64,${photo.assets[0].base64}`);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    data.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    return data;
  };

  const pickImageWithGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      });
      const data = makeUploadFormData(result);
      const {secure_url} = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: 'post',
          body: data,
        },
      )
        .then(res => res.json())
        .catch(e => console.log(e));
      setAvatar(secure_url);
    } catch (error) {}
  };
  const updateInfo = async () => {
    distpatch(setLoading(true));
    const res = await service.updateInfo();
    if (res) {
      await getUser();
    }
    distpatch(setLoading(false));
  };
  const getUser = async () => {
    distpatch(setLoading(true));
    const res = await service.getUser();
    if (res) {
      setUser(res?.returnValue?.data);
      setAvatar(res?.returnValue?.data?.avatar);
      setName(res?.returnValue?.data?.username);
    }
    distpatch(setLoading(false));
  };
  React.useEffect(() => {
    getUser();
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
        <Text style={styles.headerName}>Thông tin cá nhân</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <ScrollView
          style={styles.inputField_main}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Block style={styles.inputField_fieldContent}>
            <Text style={styles.inputField_fieldContentLabel}>Avatar</Text>
            <Block style={styles.inputField_fieldContentEditAvt}>
              <TouchableOpacity
                onPress={pickImageWithGallery}
                style={styles.inputField_fallbackAvatar_avatar}>
                <Image
                  source={user?.avatar ? {uri: user?.avatar} : Images.LOGO}
                  style={styles.img}
                />
              </TouchableOpacity>
              <Text style={styles.inputField_description}>
                Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
              </Text>
            </Block>
          </Block>
          <Block style={styles.inputField_fieldContent}>
            <Text style={styles.inputField_fieldContentLabel}>Họ tên</Text>
            <Block style={styles.inputField_fieldContentEdit}>
              <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                style={styles.inputField_fieldContentInput}
                placeholder="Thêm tên của bạn"
                onChangeText={setName}
                value={name}
              />
              <Text style={styles.inputField_description}>
                Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình
                luận của bạn.
              </Text>
            </Block>
          </Block>
          <Block style={styles.inputField_fieldContent}>
            <Text style={styles.inputField_fieldContentLabel}>Bio</Text>
            <Block style={styles.inputField_fieldContentEdit}>
              <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                style={styles.inputField_fieldContentInput}
                placeholder="Thêm giới thiệu"
              />
              <Text style={styles.inputField_description}>
                Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của
                bạn.
              </Text>
            </Block>
          </Block>

          <Block style={styles.inputField_fieldContent}>
            <Text style={styles.inputField_fieldContentLabel}>Email</Text>
            <Block style={styles.inputField_fieldContentEdit}>
              <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                style={styles.inputField_fieldContentInput}
                placeholder="Eg. hoclaptrinh@edu.vn"
                value={user?.email}
              />
            </Block>
          </Block>
          <Block style={styles.inputField_fieldContent}>
            <Text style={styles.inputField_fieldContentLabel}>
              Số điện thoại
            </Text>
            <Block style={styles.inputField_fieldContentEdit}>
              <TextInput
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                style={styles.inputField_fieldContentInput}
                placeholder="Thêm số điện thoại"
              />
              <Text style={styles.inputField_description}>
                Điện thoại liên kết với LEARNIT.
              </Text>
            </Block>
          </Block>
          <Block style={styles.inputField_fieldContent}>
            <TouchableOpacity
              style={styles.button_bottom_box}
              onPress={() => updateInfo()}>
              <Text style={styles.button_bottom_text}>Lưu thông tin</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default SettingScreen;
