import base64 from 'react-native-base64';
import {JWT_KEY, URL_MAIN} from '@base/common/Constants';
import api from '@base/domain/api';
import {IRegisterAccount} from './local/IRegisterAccount';
import Helper from '../base/utils/helper';

interface PersonalSchedule {
  courseId: string;
  note: string;
  date: string;
  time: string;
}
export default class LearnService {
  async getCourse(): Promise<any> {
    try {
      return api(
        '/courses',
        {},
        {
          method: 'GET',
        },
      );
    } catch (error) {
      return error;
    }
  }
  async getCourseId(courseId): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      return api(
        `/courses/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
    } catch (error) {
      return error;
    }
  }
  async getLessons(courseId): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      // => res trả ra rất nhiều key, cái mình cần là .data
      const res = await api(
        `/lessons/user?courseId=${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
  async getOneLessons(courseId): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      // => res trả ra rất nhiều key, cái mình cần là .data
      const res = await api(
        `/lessons/user/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
  async registerCourse(courseId): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);

      const res = await api(
        `/courses/register`,
        {
          courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'POST',
        },
      );
      console.log('res', res);
      return res;
    } catch (error) {
      console.log('errỏr', error);
      return error;
    }
  }
  async currentLesson(courseId): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/lessons/user/currentLesson/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
      return res.data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  async userCourse(): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/courses/user/current`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
      return res;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  async getNoteLession(id): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/lessons/user/note/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'GET',
        },
      );
      return res?.data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  async noteLession(params): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/lessons/user/note`,
        {
          lessonId: params?.id,
          notes: params?.notes,
          second: null,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'POST',
        },
      );
      return res?.data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  async deleteNoteLession(id): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/lessons/user/note/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'DELETE',
        },
      );
      return res?.data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
  // login(username: string, password: string): Promise<any> {
  //   return api('account/v1/authorize/token', null, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
  //     },
  //   });
  // }
}
