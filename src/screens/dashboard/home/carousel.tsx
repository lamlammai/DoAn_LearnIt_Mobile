import {Block} from '@components';
import React, {useState, useCallback, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Images} from '@assets/images/index';
import Carousel from 'react-native-snap-carousel';
import Dimens from '@base/common/Dimens';

const exampleItems = [
  {
    title: 'Lập trình hướng đối tượng trong C++    ',
    text: 'Object-Oriented-Programming (Object-Oriented-Programming) là một phương pháp lập trình dựa trên đối tượng để tìm ra bản chất của vấn đề. Khóa học này giúp các lập trình viên học các kỹ thuật lập trình mà tất cả các yêu',
    img: Images.BG1,
  },
  {
    title: 'Thành Quả của Học Viên',
    text: 'useEffectĐể đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    img: Images.BG2,
  },
  {
    title: 'Truyền thông máy tính &; Mạng    ',
    text: 'Khóa học cung cấp kiến thức cơ bản và dễ hiểu về mạng máy tính và truyền thông dữ liệu cho các lập trình viên.    ',
    img: Images.BG3,
  },
  {
    title: 'Cấu trúc dữ liệu và thuật toán    ',
    text: 'Khóa học này sẽ giúp bạn hiểu các thuật toán cũng như bản chất của cấu trúc dữ liệu - điều kiện để trở thành lập trình viên giỏi.    ',
    img: Images.BG4,
  },
  {
    title: 'Giới thiệu về SQL    ',
    text: 'Hiểu và phân biệt các thiết bị mạng. Hiểu được tầm quan trọng và ứng dụng thực tế của mạng Khả năng đưa ra lựa chọn về các gói mạng cơ bản trong thực tế ',
    img: Images.BG5,
  },
];

const CustomCarousel = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({item, index}) => (
      <ImageBackground style={styles.carousel} source={item.img} key={index}>
        <Block style={styles.carouselText}>
          <Text style={styles.carouselTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.carouselSubTitle} numberOfLines={2}>
            {item.text}
          </Text>
          <TouchableOpacity style={styles.carouselButton}>
            <Text style={styles.carouselButtonText}>Học ngay</Text>
          </TouchableOpacity>
        </Block>
      </ImageBackground>
    ),
    [],
  );

  return (
    <SafeAreaView>
      <View>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={Dimens.DEVICE_WIDTH}
          itemWidth={Dimens.DEVICE_WIDTH}
          renderItem={renderItem}
          onSnapToItem={index => setActiveIndex(index)}
          autoplay={true}
          loop={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;
