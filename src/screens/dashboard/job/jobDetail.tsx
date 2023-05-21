import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
export default function JobDetailScreen({navigation}) {
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
        <Text style={styles.headerName}>Cơ hội việc làm</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Block style={styles.container_top}>
            <Text style={styles.container_heading}>Fresher/Mid Tester</Text>
          </Block>
          <Block style={styles.container_body}>
            <Block style={styles.recruitmentDetail_info}>
              <Block style={styles.recruitmentDetail__item}>
                <Text style={styles.recruitmentDetail__salary_title}>
                  $Mức lương: 8.000.000đ - 15.000.000đ
                </Text>
              </Block>
              <Block style={styles.recruitmentDetail__item}>
                <Text style={styles.recruitmentDetail__icon}>$</Text>
                <Text style={styles.recruitmentDetail__name}>
                  Nam Trung Yên, Hà Nội
                </Text>
              </Block>
              <Block style={styles.recruitmentDetail__item}>
                <Text style={styles.recruitmentDetail__icon}>$</Text>
                <Text style={styles.recruitmentDetail__name}>
                  5 tháng trước
                </Text>
              </Block>
            </Block>
            <Block style={styles.recruitmentDetail_main}>
              <Text style={styles.recruitmentDetail_heading}>
                Lý Do Để Gia Nhập Công Ty
              </Text>
              <Block style={styles.recruitmentDetail_textContent}>
                <Text style={styles.recruitmentDetail_item}>
                  Mức lương: 8 - 15 triệu (có thể hơn, tùy thuộc năng lực)
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Thời gian làm việc: 8:30 - 12:00, 13:30 - 18:00 hàng ngày, từ
                  thứ 2 - thứ 6.
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Được cấp máy tính (laptop) để làm việc
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Miễn phí ăn trưa, miễn phí gửi xe
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Thưởng doanh thu theo quy định
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Thưởng lễ, Tết, lương tháng 13
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Hợp đồng lao động, BHXH, BHYT đầy đủ theo quy định của pháp
                  luật
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  ReText tăng lương 6 tháng/lần
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Cơ hội thăng tiến không giới hạn
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Văn hóa phẳng, cởi mở và chia sẻ
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Du lịch 1 - 2 lần/năm, team building mỗi tháng
                </Text>
                <Text style={styles.recruitmentDetail_item}>
                  Địa điểm làm việc: Nam Trung Yên, Cầu Giấy, Hà Nội
                </Text>
              </Block>
            </Block>
            <Block style={styles.relatedJobs}>
              <Text style={styles.container_heading_sub}>
                Việc Làm Khác Dành Cho Bạn
              </Text>
              <Block style={styles.listJobs_wrapper}>
                <Block style={styles.jobItem_wrapper}>
                  <Text style={styles.jobItem_title}>Fresher/Mid Tester</Text>
                  <Block style={styles.jobItem_salary}>
                    <Text style={styles.jobItem_icon}>$</Text>
                    <Text style={styles.jobItem_name}>
                      Mức lương: 15.000.000 - 25.000.000
                    </Text>
                  </Block>
                  <Block style={styles.jobItem_skills}>
                    <Text style={styles.jobItem_skills_item}>PHP</Text>
                    <Text style={styles.jobItem_skills_item}>Laravel</Text>
                    <Text style={styles.jobItem_skills_item}>MySQL</Text>
                    <Text style={styles.jobItem_skills_item}>REST API</Text>
                  </Block>
                  <Text style={styles.jobItem_createdFromNow}>2 năm trước</Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
}
