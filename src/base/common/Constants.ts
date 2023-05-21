import {Platform} from 'react-native';

export const AppInfo = require('../../../app.json');

export const IS_IOS = Platform.OS === 'ios';

export const AVATAR_DEFAULT =
  'https://i.pinimg.com/originals/e6/fe/5b/e6fe5b40296509fb8e2c00cd16173d92.jpg';

const CODE_PUSH_KEY_DEV = IS_IOS
  ? 'pCpq5fIz5LziynPMgFSIgSHq6fBDIXKWBDDu8'
  : 'ehUuYRBAUPvR3SMA0qiHYc1gsX4gCccij2fA4';

const CODE_PUSH_KEY_PROP = IS_IOS
  ? 'KKzP4zB18LmJ1ibqONLfyAv6E_WS79ijq-OzO'
  : 'ehUuYRBAUPvR3SMA0qiHYc1gsX4gCccij2fA4';

export const CODE_PUSH_KEY = __DEV__ ? CODE_PUSH_KEY_DEV : CODE_PUSH_KEY_PROP;

export const RESPONSE_CODES = {
  OK: 0,
  CANCEL: -100,
  AUTH_ERROR: 102,
  NETWORK_ERROR: -1,
  ERROR_REWARDED_DAILY: 110,
  ERROR_EMAIL_USED: 133,
  ERROR_PHONE_USED: 121,
  ERROR_CODE_SENT_TO_MAIL: 132,
  TOKEN_EXPRIED: 401,
  SERVER_ERROR: 500,
};

export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
};

export const JWT_KEY = 'JWT_KEY_GO_EDU';

export const VERIFY_URL = 'http://dev.learn.goedu.asia/active-user';
export const URL_MAIN = 'http://dev.learn.goedu.asia/';

export const CODE_PUSH_PRODUCT = !IS_IOS
  ? '6DWnM7ipQWLFrTdagFfLz5GOLP-mVUU3L1i3S'
  : 'JiC_pPKki26tA9N0VTGmGT8BxXAa5DktD-9yU';

export const CODE_PUSH_DEV = IS_IOS
  ? 'NKzEjzXyYymf-Doj0LBdZDp4u_FPMzgW5rY7P'
  : 'uEzSK94zC4hjF962YY9iS-Hs-Y9n9g681k5G6';
