import React from 'react';
import {ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {Block, Text} from '@components';
import styles from './style';
import {LOTRINH_DETAIL_SCREEN} from 'navigation/screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from '@base/common/responsive';
import Color from '@theme/Color';
export default function LotrinhScreen({navigation}) {
  const PathList = [
    {
      path: 'FRONTEND',
      title: 'Lộ trình học Front-end',
      detail:
        ' Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là  Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.',
      desc: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
    },
    {
      path: 'BACKEND',
      title: 'Lộ trình học Back-end',
      detail:
        ' Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác. Back-end là nơi xử lý dữ liệu và lưu trữ. Vì vậy, nhiệm vụ của lập trình viên Back-end là phân tích thiết kế dữ liệu, xử lý logic nghiệp vụ của các chức năng trong ứng dụng.',
      desc: 'Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.',
    },
    {
      path: 'MOBILE',
      title: 'Lộ trình học Mobile App',
      detail:
        ' Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là  Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.',
      desc: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
    },
    {
      path: 'BASIC',
      title: 'Lộ trình học cho người mới',
      detail:
        ' Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là  Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.',
      desc: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
    },
    {
      path: 'OTHER',
      title: 'Lộ trình học khác',
      detail:
        'Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là  Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.',
      desc: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
    },
  ];
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
        <Text style={styles.headerName}>Lộ trình học</Text>
        <Text style={styles.icon} />
      </Block>
      <Block style={styles.content}>
        <Text style={styles.desc}>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập
          trung vào lộ trình "Front-end".
        </Text>
        <Block style={styles.containerBody}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Block style={styles.learningPath}>
              {PathList.map((item, index) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(LOTRINH_DETAIL_SCREEN, {
                      data1: item,
                    })
                  }
                  key={index}>
                  <Block style={styles.learningPathItem}>
                    <TouchableOpacity
                      style={styles.learningPathItemBody}
                      onPress={() =>
                        navigation.navigate(LOTRINH_DETAIL_SCREEN, {
                          data1: item,
                        })
                      }>
                      <Text style={styles.learningPathItem_title}>
                        {item.title}
                      </Text>
                      <Text style={styles.learningPathItem_desc}>
                        {item.desc}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btnBox}
                      onPress={() =>
                        navigation.navigate(LOTRINH_DETAIL_SCREEN, {
                          data1: item,
                        })
                      }>
                      <Text style={styles.btnText}>Xem chi tiết</Text>
                    </TouchableOpacity>
                  </Block>
                </TouchableOpacity>
              ))}
            </Block>
          </ScrollView>
          <Block style={styles.suggestionBox}>
            <Text style={styles.suggestionBox_info}>
              Tham gia cộng đồng học viên F8 trên Facebook
            </Text>
            <Text style={styles.suggestionBox_des}>
              Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
              gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
            </Text>
            <TouchableOpacity style={styles.btnBoxNormal}>
              <Text style={styles.btnTextNormal}>Tham gia nhóm</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
}
