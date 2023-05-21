import {JWT_KEY} from '@base/common/Constants';
import api from '@base/domain/api';
import Helper from '../base/utils/helper';

export default class UserService {
  async getHistory(): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/users/me`,
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
      return error;
    }
  }
  async getBlog(topic): Promise<any> {
    try {
      console.log('topic', topic);
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `posts/user?topic=${topic}`,
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
      return error;
    }
  }
  async getBlogAll(): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `posts/user`,
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
      return error;
    }
  }
  async getBlogDetail(id): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `posts/user/${id}`,
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
      return error;
    }
  }
  async getUser(token?: any): Promise<any> {
    try {
      const accessToken = token ? token : await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/users/me`,
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
      return error;
    }
  }
  async vnPay(amount): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/users/deposit`,
        {amount},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'POST',
        },
      );
      return res?.data;
    } catch (error) {
      return error;
    }
  }
  async getBlogUser(): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/posts/get-user-post`,
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
      return error;
    }
  }
  async getListComment(postId): Promise<any> {
    console.log(`postus`, postId);

    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/comments?postId=${postId}`,
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
      return error;
    }
  }
  async postComment(params: any): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/comments`,
        {
          content: params.content,
          parrentCommentId: null,
          postId: params.postId,
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
      return error;
    }
  }
  async updateComment(params: any): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/comments`,
        {
          content: params.content,
          commentId: params?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: 'PUT',
        },
      );
      return res?.data;
    } catch (error) {
      return error;
    }
  }
  async delteComment(id: any): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/comments/${id}`,
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
      return error;
    }
  }
  async sendReport(params: any): Promise<any> {
    try {
      const accessToken = await Helper.getDataStored(JWT_KEY);
      const res = await api(
        `/reports/post`,
        {
          reason: params?.reason,
          postId: params?.postId,
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
      return error;
    }
  }
}
