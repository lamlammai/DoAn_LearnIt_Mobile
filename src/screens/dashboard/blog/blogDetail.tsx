import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Block, Spinner, Text} from '@components';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import UserService from 'domain/user.service';
import {setLoading} from '@redux/slices/appSlice';
import Dimens from '@base/common/Dimens';
import {Images} from '@assets/images';
import Helper from '@base/utils/helper';
import {formatTime, notifyInvalid} from '@base/utils/Utils';
import InputComponent from '@screens/auth/components/InputComponent';
import ModalConfirm from '@components/ModalConfirm';

export default function BlogDetailScreen({navigation, route}) {
  const {id} = route.params;
  const distpacth = useDispatch();
  const service = new UserService();
  const [detailBlog, setDetailBlog] = React.useState();
  const [visibleReport, setVisibleReport] = React.useState(false);

  React.useEffect(() => {
    const getDetailBlog = async (idBlog: string) => {
      const res = await service.getBlogDetail(idBlog);
      if (res?.returnValue?.data) {
        setDetailBlog(res?.returnValue?.data);
      }
      distpacth(setLoading(false));
    };

    if (id) {
      distpacth(setLoading(true));
      getDetailBlog(id);
    }
  }, []);

  const [show, setShow] = useState(false);
  const [like, setLike] = useState(3);
  const onHandleLike = () => {
    setLike(like + 1);
  };
  const {width} = useWindowDimensions();

  const onPressBookmark = () => {};
  const onPressEllipsis = () => {
    setShow(!show);
  };

  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const getUser = async () => {
      const res = await service.getUser();
      if (res) {
        setUser(res?.returnValue?.data);
      }
    };

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
        <Text style={styles.headerName}>Chi tiết diễn đàn</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <Text style={styles.heading}>{detailBlog?.title}</Text>
        <Block style={styles.userContainer}>
          <Block style={styles.userContainerLeft}>
            <TouchableOpacity onPress={() => {}}>
              <Block style={styles.avatarContainer}>
                <Image
                  source={{uri: detailBlog?.image}}
                  style={styles.avatarImage}
                />
              </Block>
            </TouchableOpacity>
            <Block style={styles.infoContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.nameText}>
                  {detailBlog?.author?.username}
                </Text>
              </TouchableOpacity>
              <Text style={styles.timeText}>
                {detailBlog?.createdAt
                  ? Helper.formatDate(detailBlog?.createdAt)
                  : ''}
              </Text>
            </Block>
          </Block>

          <Block style={styles.actionsContainer}>
            <TouchableOpacity onPress={onPressBookmark}>
              <Icon
                name={'bookmark-outline'}
                size={getSize.m(24)}
                style={styles.actionsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressEllipsis}>
              <Icon
                name={'ellipsis-vertical'}
                size={getSize.m(24)}
                style={styles.actionsIcon}
              />
            </TouchableOpacity>
            {show && (
              <Block style={styles.tippy_module}>
                <TouchableOpacity onPress={() => {}} style={styles.tippy_item}>
                  <Icon
                    name={'logo-facebook'}
                    size={getSize.m(24)}
                    style={styles.tippy_icon}
                  />
                  <Text style={styles.tippy_text}>Chia sẻ lên Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.tippy_item}>
                  <Icon
                    name={'copy-outline'}
                    size={getSize.m(24)}
                    style={styles.tippy_icon}
                  />
                  <Text style={styles.tippy_text}>Copy link</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setVisibleReport(true);
                  }}
                  style={styles.tippy_item}>
                  <Icon
                    name={'golf-outline'}
                    size={getSize.m(24)}
                    style={styles.tippy_icon}
                  />
                  <Text style={styles.tippy_text}>Báo cáo bài viết</Text>
                </TouchableOpacity>
              </Block>
            )}
          </Block>
        </Block>
        <Block style={styles.main}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Block style={styles.mainImgDetail}>
              <Image
                source={{uri: detailBlog?.image}}
                style={styles.mainImgDetail_img}
              />
            </Block>
            {detailBlog?.currentContent && (
              <RenderHtml
                contentWidth={Dimens.DEVICE_WIDTH}
                source={{html: detailBlog?.currentContent}}
              />
            )}
          </ScrollView>
        </Block>
        <Block style={styles.reaction_wrapper}>
          <TouchableOpacity onPress={onHandleLike} style={styles.reaction_item}>
            <Icon
              name={'heart-outline'}
              size={getSize.m(24)}
              style={styles.reaction_icon}
            />
            <Text style={styles.reaction_text}>{like}</Text>
          </TouchableOpacity>
          <ModalScreen user={user} id={detailBlog?.id} />
          <ModalReport
            user={user}
            id={detailBlog?.id}
            close={() => setVisibleReport(false)}
            show={visibleReport}
          />
        </Block>
      </Block>
    </SafeAreaView>
  );
}

const ModalScreen = ({id}: any) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formatterDate = new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const service = new UserService();
  const [comments, setComments] = useState();
  const [comment, setComment] = useState('');
  const [commentEdit, setCommentEdit] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  //action
  const [dataRemove, setDataRemove] = useState(false);
  const [isVisibleDelete, setVisibleDelete] = useState(false);

  const getComment = async () => {
    const res = await service.getListComment(id);
    if (res?.returnValue) {
      setComment('');
      let newData = res?.returnValue?.data?.data?.map(item => {
        return {
          ...item,
          update: false,
        };
      });
      setComments(newData);
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  React.useEffect(() => {
    if (id) {
      setLoading(true);
      getComment();
    }
  }, [id]);

  const postComment = async () => {
    try {
      if (comment) {
        setLoading(true);
        let params = {
          content: comment,
          parrentCommentId: null,
          postId: id,
        };
        const res = await service.postComment(params);
        if (res?.returnValue) {
          getComment();
        }
        setLoading(false);
      } else {
        notifyInvalid('Vui lòng nhập comment');
      }
    } catch (error) {}
  };

  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const getUser = async () => {
      const res = await service.getUser();
      if (res) {
        setUser(res?.returnValue?.data);
      }
    };

    getUser();
  }, []);

  const handleEdit = key => {
    let newData = comments?.map((item, index) => {
      if (index === key) {
        return {
          ...item,
          update: true,
        };
      }
      return {
        ...item,
        update: false,
      };
    });
    setComments(newData);
  };

  const postUpdate = async value => {
    try {
      if (commentEdit) {
        setLoading(true);
        let params = {
          content: commentEdit,
          id: value?.id,
        };
        const res = await service.updateComment(params);

        if (res?.returnValue) {
          getComment();
        }
        setLoading(false);
      } else {
        notifyInvalid('Vui lòng nhập comment');
      }
    } catch (error) {}
  };

  const onPressEllipsis = key => {
    setShowIndex(key);
    setShow(!show);
  };

  const handleDelete = async () => {
    try {
      setShow(false);
      if (dataRemove?.id) {
        setLoading(true);
        const res = await service.delteComment(dataRemove?.id);
        if (res?.returnValue) {
          getComment();
        }
        setLoading(false);
      }
    } catch (error) {}
  };

  const openModalDelete = data => {
    console.log('vao day');
    setDataRemove(data);
    setVisibleDelete(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
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
                  color={Color.TEXT_PRIMARY}
                  style={styles.modalCloseIcon}
                />
              </TouchableOpacity>
              <Block style={styles.modal_endow}>
                <Text style={styles.modal_endow_header}>
                  {comments?.length} bình luận
                </Text>
                <Block style={styles.modal_endow_comment}>
                  <Block style={styles.modal_endow_item}>
                    <Block style={styles.modal_endow_images}>
                      {/* <Image source={Images.LOGO} style={styles.img} /> */}
                      <Image
                        source={
                          user?.avatar ? {uri: user?.avatar} : Images.LOGO
                        }
                        style={styles.img}
                      />
                    </Block>

                    <Block style={styles.modal_endow_value}>
                      <TextInput
                        placeholder="Viết bình luận"
                        style={styles.inputModal}
                        onChangeText={setComment}
                        value={comment}
                      />
                      <TouchableOpacity
                        onPress={() => postComment()}
                        style={styles.reaction_item}>
                        <Icon
                          name={'send'}
                          size={getSize.m(24)}
                          color={Color.WHITE}
                          style={styles.reaction_icon}
                        />
                      </TouchableOpacity>
                    </Block>
                  </Block>
                </Block>
                <ScrollView
                  style={styles.list_cmt}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}>
                  {comments?.map((c: any, key: number) => (
                    <Block key={key} style={styles.cmt_item}>
                      <Block style={styles.modal_endow_images}>
                        <Image
                          source={
                            user?.avatar ? {uri: user?.avatar} : Images.LOGO
                          }
                          style={styles.img}
                        />
                      </Block>
                      <Block
                        style={{
                          borderBottomColor: 'rgba(128, 128, 128, 0.2)',
                          borderBottomWidth: 1,
                          paddingBottom: 5,
                          width: 250,
                        }}>
                        <Block style={styles.userContainer}>
                          <Text>
                            <Text>{c?.user?.username}</Text>
                            <Text style={styles.cmt_value_date}>
                              {` ${formatterDate.format(
                                Date.parse(c?.createdAt),
                              )}`}
                            </Text>
                          </Text>
                          {user?.id === c?.user?.id && (
                            <TouchableOpacity
                              onPress={() => onPressEllipsis(key)}>
                              <Icon
                                name={'ellipsis-vertical'}
                                size={getSize.m(24)}
                                style={styles.actionsIcon}
                              />
                            </TouchableOpacity>
                          )}
                          {show && key === showIndex && (
                            <TouchableOpacity style={styles.commentAction}>
                              <Text
                                style={styles.commentIcon}
                                onPress={() => {
                                  handleEdit(key);
                                  setShow(false);
                                }}>
                                Sửa
                              </Text>
                              <Text
                                onPress={() => {
                                  openModalDelete(c);
                                  setShow(false);
                                }}
                                style={styles.commentIcon}>
                                Xoá
                              </Text>
                            </TouchableOpacity>
                          )}
                        </Block>
                        <Block>
                          {c?.update ? (
                            <Block style={styles.modal_endow_value_edit}>
                              <TextInput
                                placeholder="Sửa bình luận"
                                style={styles.inputModalEdit}
                                onChangeText={setCommentEdit}
                                defaultValue={c?.content}
                              />
                              <TouchableOpacity
                                onPress={() => postUpdate(c)}
                                style={styles.reaction_item_edit}>
                                <Icon
                                  name={'send'}
                                  size={getSize.m(23)}
                                  color={Color.WHITE}
                                  style={styles.reaction_icon}
                                />
                              </TouchableOpacity>
                            </Block>
                          ) : (
                            <Block>
                              <Text
                                style={
                                  styles.cmt_value
                                }>{`${c?.content}`}</Text>
                            </Block>
                          )}
                        </Block>
                      </Block>
                    </Block>
                  ))}
                </ScrollView>
              </Block>
            </Block>
          </Block>
          {loading && (
            <Spinner
              mode={'overlay'}
              size={'large'}
              color={Color.YELLOW_HOLDER}
            />
          )}
        </Modal>
        <ModalConfirm
          msg=""
          isVisible={isVisibleDelete}
          handleClose={() => setVisibleDelete(false)}
          onChange={handleDelete}
          title={'Bạn có muốn xoá bình luận ' + dataRemove?.content}
        />
        <TouchableOpacity
          onPress={() => {
            setShowModal(!showModal);
          }}
          style={styles.reaction_item}>
          <Icon
            name={'chatbubble-outline'}
            size={getSize.m(24)}
            style={styles.reaction_icon}
          />
          <Text style={styles.reaction_text}> {comments?.length} </Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

const ModalReport = ({id, show, close, user}: any) => {
  const service = new UserService();
  const [report, setReport] = React.useState('');

  const handleReport = async () => {
    try {
      if (report) {
        let params = {
          postId: id,
          reason: report,
        };
        const res = await service.sendReport(params);
        if (res?.returnValue?.statusCode == '200') {
          notifyInvalid('Gửi báo cáo thành công !');
          close();
        } else {
          notifyInvalid(res?.returnData?.message ?? '');
        }
        console.log('vao day 1');
      }
    } catch (error) {
      notifyInvalid(error?.message ?? '');
      close();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Block style={styles.containerModal}>
        <Modal animationType={'slide'} transparent={true} visible={show}>
          <Block style={styles.modal}>
            <Block style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => {
                  close();
                }}>
                <Icon
                  name={'close'}
                  size={getSize.m(24)}
                  color={Color.TEXT_PRIMARY}
                  style={styles.modalCloseIcon}
                />
              </TouchableOpacity>
              <Block style={styles.modal_endow}>
                <Text style={styles.modal_title}>Báo cáo bài viết</Text>
                <Block style={styles.modal_endow_comment}>
                  <Block style={styles.modal_endow_item_report}>
                    <Block style={styles.modal_endow_value_report}>
                      <TextInput
                        multiline={true}
                        textContentType="givenName"
                        placeholder="Viết báo cáo"
                        style={styles.inputModalReport}
                        onChangeText={setReport}
                        value={report}
                        numberOfLines={4}
                      />
                    </Block>
                    <TouchableOpacity
                      onPress={() => {
                        handleReport();
                      }}
                      style={styles.modal_bottom_btn_primary}>
                      <Text style={styles.modal_button_btn_text_primary}>
                        Gửi báo cáo
                      </Text>
                      <Icon
                        name={'send'}
                        size={getSize.m(24)}
                        color={Color.WHITE}
                        style={styles.reaction_icon_report}
                      />
                    </TouchableOpacity>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Modal>
      </Block>
    </SafeAreaView>
  );
};
