import {getIconComponent} from '@assets/icon';
import {getSize} from '@base/common/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BlogScreen from '@screens/dashboard/blog';
import CourseScreen from '@screens/dashboard/course/course';
import HomeScreen from '@screens/dashboard/home';
import LotrinhScreen from '@screens/dashboard/lotrinh';
import UserScreen from '@screens/dashboard/Person';
import Font from '@theme/Font';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';
import {
  BLOG_SCREEN,
  HOME_SCREEN,
  MENU_SCREEN,
  LOTRINH_SCREEN,
  COURSE_SCREEN,
} from './screen';

const Icon = getIconComponent('demo');

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === HOME_SCREEN) {
            iconName = 'Vector-3';
          } else if (route.name === BLOG_SCREEN) {
            iconName = 'Vector-4';
          } else if (route.name === LOTRINH_SCREEN) {
            iconName = 'Group-1';
          } else if (route.name === COURSE_SCREEN) {
            iconName = 'Group-481';
          } else {
            iconName = 'Group-482';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#FA9D1A' : '#C4C4C4'}
              size={size}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#FA9D1A',
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}>
      <HomeTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeTab.Screen name={COURSE_SCREEN} component={CourseScreen} />
      <HomeTab.Screen name={LOTRINH_SCREEN} component={LotrinhScreen} />
      <HomeTab.Screen name={BLOG_SCREEN} component={BlogScreen} />
      <HomeTab.Screen name={MENU_SCREEN} component={UserScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;

export const styles = StyleSheet.create({
  tabBar: {
    height: getSize.m(70 + (isIphoneX() ? getBottomSpace() / 2 : 0)),
    paddingTop: getSize.m(10),
    display: 'flex',
    paddingBottom: isIphoneX() ? getBottomSpace() / 2 : getSize.m(5),
  },

  tabBarLabelStyle: {
    fontSize: getSize.m(8.5, 0.3),
    fontFamily: Font.font_bold_700,
    marginBottom: getSize.m(10),
  },
});
