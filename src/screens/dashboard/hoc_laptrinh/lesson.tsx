import React, {useState, useEffect} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
import LearnService from '../../../domain/learn.service';
import {useDispatch} from 'react-redux';
import {setLoading} from '@redux/slices/appSlice';
import ModalError from '@components/ModalError';
import ModalConfirm from '@components/ModalConfirm';
import {LEARNING} from 'navigation/screen';
const LessonScreen = ({navigation, route}) => {
  const {id, lesson} = route.params;

  const distpatch = useDispatch();

  const [dataLesson, setDataLesson] = useState([]);
  const [detailLession, setDetailLession] = useState();
  const [lessionOther, setLessionOther] = useState<any>();
  const [idLession, setIdLession] = useState();
  const [nameCourse, setNameCourse] = useState();
  const learnService = new LearnService();
  const [index, setIndex] = React.useState(0);
  const [errPre, setErrPre] = useState(false);
  const [errNext, setErrNext] = useState(false);
  const [errLock, setErrLock] = useState(false);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      distpatch(setLoading(false));
    }, 10000);
    const fetchDetailLession = async idLessions => {
      const {returnValue} = await learnService.getOneLessons(
        idLession ? idLession : idLessions,
      );
      if (returnValue?.data) {
        setDetailLession(returnValue?.data);
        for (let i = 0; i <= returnValue?.data?.course?.lessons?.length; i++) {
          if (returnValue?.data?.course?.lessons[i]?.id === idLessions) {
            setIndex(i);
          }
        }
        setNameCourse(returnValue?.data?.course?.name);
        setDataLesson(returnValue?.data?.course?.lessons);
        clearTimeout(timeout);
        setLessionOther({
          nextLessonId: returnValue?.data?.nextLessonId,
          previousLessonId: returnValue?.data?.previousLessonId,
        });
        distpatch(setLoading(false));
      } else {
        distpatch(setLoading(false));
      }
    };
    if (lesson) {
      distpatch(setLoading(true));
      if (dataLesson[index + 1]) {
        if (dataLesson[index + 1]?.id === idLession) {
          // if (idLession == lesson) {
          //   fetchDetailLession(lesson);
          //   return;
          // }
          setErrLock(true);
          distpatch(setLoading(false));
          return;
        }
      }
      fetchDetailLession(lesson);
    }
  }, [lesson, idLession]);

  // console.log('detail', detailLession);
  // const getLesson = async () => {
  //   try {
  //     if (id) {
  //       const {returnValue} = await learnService.getLessons(id);
  //       if (returnValue.statusCode !== 200) {
  //         throw returnValue.message;
  //       } else {
  //         // notifyInvalid('Lấy dữ liệu thành công!');
  //         setDataLesson(returnValue?.data?.lesson);
  //       }
  //     }
  //   } catch (error) {
  //     // notifyInvalid(error);
  //   }
  // };
  // useEffect(() => {
  //   getLesson();
  // }, [id]);

  const nextLession = () => {
    if (lessionOther?.nextLessonId) {
      setIdLession(lessionOther?.nextLessonId?.id);
    } else {
      setErrNext(true);
    }
  };
  const prevLession = () => {
    if (lessionOther?.previousLessonId) {
      setIdLession(lessionOther?.previousLessonId?.id);
    } else {
      setErrPre(true);
    }
  };
  const handleCloseModal = () => {
    setErrLock(false);
    setErrNext(false);
    setErrPre(false);
  };

  const getNoteLession = async idL => {
    distpatch(setLoading(true));
    try {
      let res = await learnService.getNoteLession(idL);
      if (res?.returnValue?.data) {
        setNotes(res?.returnValue?.data);
        distpatch(setLoading(false));
      } else {
        distpatch(setLoading(false));
      }
    } catch (error) {
      distpatch(setLoading(false));
    }
  };

  React.useEffect(() => {
    if (lesson) {
      getNoteLession(idLession ? idLession : lesson);
    }
  }, [lesson, idLession]);

  const [visibleDelete, setVisibleDelete] = React.useState(false);
  const [note, setNote] = React.useState();
  const handleDelete = async () => {
    try {
      if (note?.id) {
        let res = await learnService.deleteNoteLession(note?.id);
        if (res?.returnValue) {
          getNoteLession(idLession ? idLession : lesson);
        }
      }
    } catch (error) {}
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
        <Text style={styles.headerName}>{nameCourse}</Text>
        <Text style={styles.icon}>.</Text>
      </Block>
      <Block style={styles.video}>
        {/* <VideoPlayer
          source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
          style={styles.backgroundVideo}
          disableBack={true}
        /> */}
        <Video
          source={{uri: detailLession?.link ?? ''}} // Can be a URL or a local file.
          controls={true} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          fullscreen={true}
          resizeMode="cover"
        />
      </Block>
      <Block style={styles.content}>
        <Text style={styles.heading}>{detailLession?.name ?? ''}</Text>

        <AddNoteScreen
          id={idLession ? idLession : lesson}
          getNoteLession={getNoteLession}
        />
        <Text style={styles.notiText}>
          Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem
          LEARNIT sắp có gì mới nhé!
        </Text>

        <Block>
          <Text style={styles.noteText}>
            {notes?.length
              ? `${notes?.length} Ghi chú`
              : 'Không có ghi chú nào'}
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {notes?.map((note, key) => (
              <Block
                key={key}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  marginBottom: 10,
                }}>
                <Text>
                  {`- `}
                  {note?.notes}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setNote(note);
                    setVisibleDelete(true);
                  }}>
                  <Icon
                    name={'trash-outline'}
                    size={getSize.m(16)}
                    color={Color.TEXT_PRIMARY}
                  />
                </TouchableOpacity>
              </Block>
            ))}
          </ScrollView>
        </Block>
      </Block>

      <Block style={styles.actionBar}>
        <Block style={styles.actionBar_toggle_btn}>
          <ModalScreen data={dataLesson} index={index} setId={setIdLession} />
          <Block style={styles.actionBar_group_btn}>
            <TouchableOpacity
              style={
                lessionOther?.previousLessonId
                  ? styles.actionBar_btn_primary
                  : styles.actionBar_btn
              }>
              <Block style={styles.actionBar_icon_text}>
                <Icon
                  name={'chevron-back'}
                  size={getSize.m(24)}
                  style={
                    lessionOther?.previousLessonId
                      ? styles.actionBar_text_primary
                      : styles.actionBar_text
                  }
                />
                <Text
                  style={
                    lessionOther?.previousLessonId
                      ? styles.actionBar_text_primary
                      : styles.actionBar_text
                  }
                  onPress={() => prevLession()}>
                  BÀI TRƯỚC
                </Text>
              </Block>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                lessionOther?.nextLessonId
                  ? styles.actionBar_btn_primary
                  : styles.actionBar_btn
              }>
              <Block style={styles.actionBar_icon_text}>
                <Text
                  style={
                    lessionOther?.nextLessonId
                      ? styles.actionBar_text_primary
                      : styles.actionBar_text
                  }
                  onPress={() => nextLession()}>
                  BÀI TIẾP THEO
                </Text>
                <Icon
                  name={'chevron-forward'}
                  size={getSize.m(24)}
                  style={
                    lessionOther?.nextLessonId
                      ? styles.actionBar_text_primary
                      : styles.actionBar_text
                  }
                />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <ModalError
        isVisible={errPre || errNext || errLock ? true : false}
        handleClose={handleCloseModal}
        error={
          errPre
            ? 'Bạn đang ở bài đầu tiên'
            : errNext
            ? 'Bạn đang ở bài học cuối cùng'
            : 'Vui lòng hoàn thiện bài tập để chuyển sang bài tiếp theo'
        }
      />
      <ModalConfirm
        isVisible={visibleDelete}
        msg={''}
        handleClose={() => setVisibleDelete(false)}
        onChange={value => value && handleDelete()}
        title={`Bạn có chắc muốn xoá ghi chú ${note?.notes}`}
      />
    </SafeAreaView>
  );
};
export default LessonScreen;
const ModalScreen = ({data, index, setId}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView>
      <Block style={styles.containerModal}>
        <Modal animationType={'slide'} transparent={false} visible={showModal}>
          <Block style={styles.modal}>
            <Block style={styles.modalHeader}>
              <Text style={styles.modalHeader__title}>Nội dung khóa học</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(!showModal);
                }}
                style={styles.modalHeader__btn}>
                <Icon
                  name={'close'}
                  size={getSize.m(24)}
                  color={Color.RED_HOLDER}
                  style={styles.modalHeader__btn_text}
                />
              </TouchableOpacity>
            </Block>
            <Block style={styles.trackItem_steps_list}>
              {data?.map((element, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    setId(element?.id);
                    setShowModal(false);
                  }}>
                  <Block style={styles.stepItem_List}>
                    <Block style={styles.stepItem__info}>
                      <Text style={styles.stepItem_title}>{element.name}</Text>
                      {/* <Text style={styles.stepItem__desc}>11:35</Text> */}
                    </Block>
                    <Block style={styles.stepItem_icon_box}>
                      {index >= key ? (
                        <Icon
                          name={'checkmark-sharp'}
                          size={getSize.m(24)}
                          color="#60EB28"
                          style={styles.trackItem__icon}
                        />
                      ) : (
                        <Icon
                          name={'lock-closed-outline'}
                          size={getSize.m(24)}
                          color="#60EB28"
                          style={styles.trackItem__icon}
                        />
                      )}
                    </Block>
                  </Block>
                </TouchableOpacity>
              ))}
            </Block>
            {/* <ModalContent />
            <ModalContent /> */}
          </Block>
        </Modal>
        <TouchableOpacity
          style={styles.actionBar_icon}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Icon
            name={'list-outline'}
            size={getSize.m(24)}
            color={Color.RED_HOLDER}
          />
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};
const ModalContent = () => {
  const [show, setShow] = useState(false);

  return (
    <Block style={styles.modalContent}>
      <TouchableOpacity
        style={styles.trackItem_wrapper}
        onPress={() => {
          setShow(!show);
        }}>
        <Text style={styles.trackItem__title}>
          1. Khái niệm kỹ thuật cần biết
        </Text>
        <Text style={styles.trackItem__icon}>^</Text>
      </TouchableOpacity>
      {show && (
        <Block style={styles.trackItem_steps_list}>
          <Block style={styles.stepItem_wrapper}>
            <Block style={styles.stepItem__info}>
              <Text style={styles.stepItem_title}>
                1. Mô hình Client - Server là gì?
              </Text>
              <Text style={styles.stepItem__desc}>11:35</Text>
            </Block>
            <Block style={styles.stepItem_icon_box}>
              <Text style={styles.trackItem__icon}>^</Text>
            </Block>
          </Block>
          <Block style={styles.stepItem_wrapper}>
            <Block style={styles.stepItem__info}>
              <Text style={styles.stepItem_title}>
                1. Mô hình Client - Server là gì?
              </Text>
              <Text style={styles.stepItem__desc}>11:35</Text>
            </Block>
            <Block style={styles.stepItem_icon_box}>
              <Text style={styles.trackItem__icon}>^</Text>
            </Block>
          </Block>
        </Block>
      )}
    </Block>
  );
};
const AddNoteScreen = ({id, getNoteLession}) => {
  const dispatch = useDispatch();
  const [showNote, setShowNote] = useState(false);
  const service = new LearnService();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState('');

  const handleNoteLession = async () => {
    dispatch(setLoading(true));
    try {
      if (text) {
        let params = {
          id: id,
          notes: text,
        };
        let res = await service.noteLession(params);

        if (res?.returnValue?.code === 'NOTE_001') {
          getNoteLession(id);
          setShowNote(!showNote);
          setText('');
          dispatch(setLoading(false));
        } else {
          Alert.alert(res?.returnValue?.message ?? '');
        }
      }
    } catch (error) {
      dispatch(setLoading(fasle));
    }
  };

  return (
    <Block style={styles.containerModalNote}>
      <Modal animationType={'slide'} transparent={true} visible={showNote}>
        <Block style={styles.modalNote}>
          <Block style={styles.modalContentNote}>
            <Text style={styles.modalHeader__title}>Thêm ghi chú</Text>
            <TextInput
              style={styles.inputNote}
              onChangeText={setText}
              value={text}
              placeholder="Nhập ghi chú"
            />
            <Block style={styles.modalButtonGr}>
              <TouchableOpacity
                onPress={() => {
                  setShowNote(!showNote);
                }}
                style={styles.modal_bottom_btn}>
                <Text style={styles.modal_button_btn_text}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleNoteLession();
                }}
                style={styles.modal_bottom_btn_primary}>
                <Text style={styles.modal_button_btn_text_primary}>Lưu</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Modal>
      <TouchableOpacity
        style={styles.addNote}
        onPress={() => {
          setShowNote(!showNote);
        }}>
        <Text style={styles.addNoteIcon}>+</Text>
        <Text style={styles.addNotelabel}>Thêm ghi chú</Text>
      </TouchableOpacity>
    </Block>
  );
};
