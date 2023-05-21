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
    backgroundColor: Color.TEXT_PRIMARY,
    borderRadius: getSize.m(10),
    ...Styles.centerNoFlex,
    marginTop: getSize.m(40),
  },

  textBtnModal: {
    fontFamily: Font.font_semi_bold_600,
    color: Color.WHITE,
    fontSize: getSize.m(12, 0.3),
  },
});

const ModalErrorComponent = ({handleClose, isVisible, error}) => {
  return (
    <ReactNativeModal
      onBackdropPress={handleClose}
      isVisible={isVisible}
      backdropOpacity={0.2}>
      <Block style={styles.containerModal}>
        <Block alignCenter>
          <Text style={styles.titleModal}>Không thành công</Text>
          <Text style={styles.noteModal}>{error}</Text>
        </Block>
        <TouchableOpacity
          onPress={handleClose}
          activeOpacity={0.5}
          style={styles.btnModal}>
          <Text style={styles.textBtnModal}>Quay lại</Text>
        </TouchableOpacity>
      </Block>
    </ReactNativeModal>
  );
};

export default memo(ModalErrorComponent);
