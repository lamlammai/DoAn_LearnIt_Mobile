import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {IUserState} from '@redux/slices/accountSlice';
import {IAppState, setLoading} from '@redux/slices/appSlice';
import {IRootState} from '@redux/store';
import LoginScreen from '@screens/auth/login';
import ForgetPasswordScreen from '@screens/auth/login/ForgetPasswordScreen';
import ResetSuccessScreen from '@screens/auth/login/ResetSuccessScreen';
import OnBoardingScreen from '@screens/auth/onboarding';
import IntroNotifyScreen from '@screens/auth/onboarding/IntroNotifyScreen';
import RegisterScreen from '@screens/auth/register';
import SignUpSuccessScreen from '@screens/auth/register/SignUpSuccessScreen';
import BlogDetailScreen from '@screens/dashboard/blog/blogDetail';
import BlogSaveScreen from '@screens/dashboard/blog/blogSave';
import TopicScreen from '@screens/dashboard/blog/topic';
import DetailCourseScreen from '@screens/dashboard/hoc_laptrinh/chi-tiet-khoa-hoc';
import LessonScreen from '@screens/dashboard/hoc_laptrinh/lesson';
import JobDetailScreen from '@screens/dashboard/job/jobDetail';
import JobScreen from '@screens/dashboard/job/jobOpportunity';
import LotrinhDetailScreen from '@screens/dashboard/lotrinh/lotrinh_detail';
import Paycreen from '@screens/dashboard/pay';
import LichSuGDScreen from '@screens/dashboard/pay/lichsugiaodich';
import ThanhtoanScreen from '@screens/dashboard/pay/pay';
import SoDuXuScreen from '@screens/dashboard/pay/soduxu';
import InfomartionScreen from '@screens/dashboard/Person/information';
import SettingScreen from '@screens/dashboard/Person/setting';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeTabNavigator from './HomeTab';
import {
  COURSE_DETAIL_SCREEN,
  TAB_NAVIGATION,
  BLOG_DETAIL_SCREEN,
  LOTRINH_DETAIL_SCREEN,
  THONG_TIN_SCREEN,
  NAP_XU_SCREEN,
  PAY_SCREEN,
  JOB_SCREEN,
  BLOG_SAVE_SCREEN,
  JOB_DETAIL_SCREEN,
  SO_DU_XU_SCREEN,
  LICH_SU_SCREEN,
  SETTING_SCREEN,
  ONBOARDING_SCREEN,
  LOGIN_SCREEN,
  FORGET_PASSWORD_SCREEN,
  RESET_SUCCESS_SCREEN,
  REGISTER_SCREEN,
  SIGN_UP_SUCCESS_SCREEN,
  INTRO_NOTIFY_SCREEN,
  LEARNING,
  TOPIC_SCREEN,
} from './screen';
// import {Spinner} from '@components';
import Color from '@theme/Color';
import {Spinner} from '@components';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const dispatch = useDispatch();
  // const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const infoUser = {
    isLogged: true,
  };
  // const {firstBoot} = useSelector<IRootState, IAppState>(state => state.app);
  const firstBoot = false;

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);

  const {loading} = useSelector<IRootState, IAppState>(state => state?.app);
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={
            firstBoot
              ? ONBOARDING_SCREEN
              : infoUser.isLogged
              ? TAB_NAVIGATION
              : LOGIN_SCREEN
          }>
          <Stack.Screen name={ONBOARDING_SCREEN} component={OnBoardingScreen} />
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={TAB_NAVIGATION} component={HomeTabNavigator} />
          <Stack.Screen
            name={COURSE_DETAIL_SCREEN}
            component={DetailCourseScreen}
          />
          <Stack.Screen
            name={BLOG_DETAIL_SCREEN}
            component={BlogDetailScreen}
          />
          <Stack.Screen
            name={LOTRINH_DETAIL_SCREEN}
            component={LotrinhDetailScreen}
          />
          <Stack.Screen name={THONG_TIN_SCREEN} component={InfomartionScreen} />
          <Stack.Screen name={NAP_XU_SCREEN} component={Paycreen} />
          <Stack.Screen name={PAY_SCREEN} component={ThanhtoanScreen} />
          <Stack.Screen name={JOB_SCREEN} component={JobScreen} />
          <Stack.Screen name={BLOG_SAVE_SCREEN} component={BlogSaveScreen} />
          <Stack.Screen name={JOB_DETAIL_SCREEN} component={JobDetailScreen} />
          <Stack.Screen name={SO_DU_XU_SCREEN} component={SoDuXuScreen} />
          <Stack.Screen name={LICH_SU_SCREEN} component={LichSuGDScreen} />
          <Stack.Screen
            name={FORGET_PASSWORD_SCREEN}
            component={ForgetPasswordScreen}
          />
          <Stack.Screen
            name={RESET_SUCCESS_SCREEN}
            component={ResetSuccessScreen}
          />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <Stack.Screen
            name={SIGN_UP_SUCCESS_SCREEN}
            component={SignUpSuccessScreen}
          />
          <Stack.Screen
            name={INTRO_NOTIFY_SCREEN}
            component={IntroNotifyScreen}
          />
          <Stack.Screen name={LEARNING} component={LessonScreen} />
          <Stack.Screen name={SETTING_SCREEN} component={SettingScreen} />
          <Stack.Screen name={TOPIC_SCREEN} component={TopicScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {loading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.YELLOW_HOLDER} />
      )}
    </React.Fragment>
  );
};

export default RootStack;
