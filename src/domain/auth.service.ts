import {JWT_KEY, URL_MAIN} from '@base/common/Constants';
import api from '@base/domain/api';
import Helper from '@base/utils/helper';
import {IRegisterAccount} from './local/IRegisterAccount';

export default class AuthService {
  login(email: string, password: string): Promise<any> {
    return api(
      'auth/login',
      {email, password},
      {
        method: 'POST',
      },
    );
  }
  // login(username: string, password: string): Promise<any> {
  //   return api('account/v1/authorize/token', null, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
  //     },
  //   });
  // }

  registerAccount({
    username,
    email,
    password,
    confirmPassword,
  }: IRegisterAccount): Promise<any> {
    return api(
      'auth/register',
      {
        username,
        email,
        password,
        confirmPassword,
      },
      {method: 'POST'},
    );
  }

  sendOtp({email, studentCode}): Promise<any> {
    return api(
      'api/v1/auth/send-otp',
      {
        email,
        studentCode,
      },
      {method: 'POST'},
    );
  }
  async changePass(password, newPassword, reNewPassword): Promise<any> {
    const accessToken = await Helper.getDataStored(JWT_KEY);
    console.log(accessToken);
    return api(
      'api/v1/auth/change-password',
      {
        password,
        newPassword,
        reNewPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: 'POST',
      },
    );
  }

  getInfoUser(): Promise<any> {
    return api('api/v1/auth/me', null, {method: 'GET'});
  }

  getInfoTeacher(): Promise<any> {
    return api('api/v1/auth/teacher/me', null, {method: 'GET'});
  }
  updateProfile(name, phone, avatar): Promise<any> {
    return api(
      'api/v1/users',
      {
        name,
        phone,
        avatar,
      },
      {method: 'PUT'},
    );
  }

  resetPassWord(
    email: string,
    url: string = URL_MAIN + 'change-pass',
  ): Promise<any> {
    return api('admin/account/v1/user/reset/password', {email, url});
  }

  changePasswordOtp(password: string, token: string): Promise<any> {
    return api('admin/account/v1/user/update/otp-password', {password, token});
  }
}
