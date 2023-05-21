import React, {memo} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {getSize} from '@base/common/responsive';
import Styles from '@base/common/Styles';
import {Block, Text} from '@components';
import Color from '@theme/Color';
import Font from '@theme/Font';

const styles = StyleSheet.create({
  containerModal: {
    paddingHorizontal: getSize.m(30),
    backgroundColor: Color.BLOCK_GRAY,
    borderRadius: getSize.m(20),
    paddingBottom: getSize.m(30),
    paddingTop: getSize.m(20),
    alignSelf: 'stretch',
  },

  titleModal: {
    color: Color.WHITE,
    fontFamily: Font.font_bold_700,
    fontSize: getSize.m(15, 0.3),
    marginTop: getSize.m(10),
    textAlign: 'center',
  },

  noteModal: {
    fontFamily: Font.font_regular_400,
    fontSize: getSize.m(13, 0.3),
    color: '#BCE1C6',
    marginTop: getSize.m(10),
    textAlign: 'center',
  },

  btnModal: {
    height: getSize.m(38),
    // backgroundColor: Color.TEXT_PRIMARY,
    borderRadius: getSize.m(10),
    ...Styles.rowCenter,
    marginTop: getSize.m(40),
  },

  textBtnModal: {
    fontFamily: Font.font_semi_bold_600,
    color: Color.WHITE,
    fontSize: getSize.m(12, 0.3),
    width: '40%',
    backgroundColor: Color.WHITE,
    color: 'black',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginRight: 5,
  },
  textBtnModalCofirm: {
    fontFamily: Font.font_semi_bold_600,
    color: Color.WHITE,
    fontSize: getSize.m(12, 0.3),
    width: '40%',
    backgroundColor: Color.TEXT_PRIMARY,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginLeft: 5,
  },
});

const ModalConfirmComponent = ({
  handleClose,
  isVisible,
  msg,
  title,
  onChange,
}) => {
  return (
    <ReactNativeModal
      onBackdropPress={handleClose}
      isVisible={isVisible}
      backdropOpacity={0.2}>
      <Block style={styles.containerModal}>
        <Block alignCenter>
          <Text style={styles.titleModal}>{title ? title : 'Xác nhận'}</Text>
          <Text style={styles.noteModal}>{msg}</Text>
        </Block>
        <Block>
          <TouchableOpacity activeOpacity={0.5} style={styles.btnModal}>
            <Text onPress={() => handleClose()} style={styles.textBtnModal}>
              Quay lại
            </Text>
            <Text
              onPress={() => {
                onChange(true);
                handleClose();
              }}
              style={styles.textBtnModalCofirm}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </ReactNativeModal>
  );
};

export default memo(ModalConfirmComponent);
