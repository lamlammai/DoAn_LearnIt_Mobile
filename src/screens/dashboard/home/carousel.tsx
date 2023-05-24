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
    title: 'Khóa học HTML CSS Pro',
    text: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    img: Images.BG1,
  },
  {
    title: 'Thành Quả của Học Viên',
    text: 'Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!',
    img: Images.BG2,
  },
  {
    title: 'Khóa học HTML CSS Pro',
    text: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    img: Images.BG3,
  },
  {
    title: 'Khóa học HTML CSS Pro',
    text: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    img: Images.BG4,
  },
  {
    title: 'Khóa học HTML CSS Pro',
    text: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. ',
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
