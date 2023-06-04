import React from 'react';
import {Block, Text} from '@components';
import {ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';
import {JOB_DETAIL_SCREEN} from 'navigation/screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
export default function JobScreen({navigation}) {
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
        <Text style={styles.icon}>.</Text>
      </Block>
      <Block style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Block style={styles.container_top}>
            <Text style={styles.container_heading}>Cơ hội việc làm</Text>
            <Text style={styles.container_desc}>
              LEARNIT tin rằng mỗi người đều có những tiềm năng vô hạn để trở
              nên giỏi giang. Vấn đề là họ không áp dụng đúng phương pháp để
              việc học hiệu quả hơn. Vì vậy LEARNIT mong muốn giúp cho những
              người gặp khó khăn trong việc học hành nói chung và học lập trình
              nói riêng được tiếp cận các phương pháp, kinh nghiệm học lập trình
              thông minh để trở nên giỏi thực sự.
            </Text>
          </Block>
          <Block style={styles.container_body}>
            <Text style={styles.container_heading_sub}>
              5 việc làm đang mở tại LEARNIT
            </Text>
            <TouchableOpacity
              style={styles.listJobs_wrapper}
              onPress={() => navigation.navigate(JOB_DETAIL_SCREEN)}>
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
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listJobs_wrapper}
              onPress={() => navigation.navigate(JOB_DETAIL_SCREEN)}>
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
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listJobs_wrapper}
              onPress={() => navigation.navigate(JOB_DETAIL_SCREEN)}>
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
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listJobs_wrapper}
              onPress={() => navigation.navigate(JOB_DETAIL_SCREEN)}>
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
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
}
