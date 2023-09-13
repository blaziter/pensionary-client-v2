import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  Announcement,
  Employee,
  EmployeeType,
  GetEmployeeByGroup,
  Image,
  LoginPayload,
  User,
} from '@types';

export class clientApi {
  auth = {
    login: async (payload: LoginPayload) => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        payload,
      );
    },
    logout: async () => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
      );
    },
    verify: async () => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
      );
    },
  };
  employee = {
    getAll: async (): Promise<Employee[]> => {
      return await this.instance
        .get(`${import.meta.env.VITE_API_URL}/employee/all`)
        .then(res => res.data);
    },
    getByRole: async (params: EmployeeType): Promise<Employee[]> => {
      return await this.instance
        .get(
          `${import.meta.env.VITE_API_URL}/employee/?group=ROLE&data=${
            params.role
          }`,
        )
        .then(res => res.data);
    },
    getOne: async (params: GetEmployeeByGroup): Promise<Employee> => {
      return await this.instance
        .get(`${import.meta.env.VITE_API_URL}/employee/`, params)
        .then(res => res.data);
    },
    postEmployee: async (params: Employee) => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/employee/new`,
        params,
      );
    },
    putEmployee: async (params: Employee) => {
      return await this.instance.put(
        `${import.meta.env.VITE_API_URL}/employee/${params.employeeId}`,
        params,
      );
    },
    deleteEmployee: async (params: Employee) => {
      return await this.instance.delete(
        `${import.meta.env.VITE_API_URL}/employee/${params.employeeId}`,
      );
    },
  };
  announcement = {
    getAll: async (): Promise<Announcement[]> => {
      return await this.instance
        .get(`${import.meta.env.VITE_API_URL}/announcement/all`)
        .then(res => res.data);
    },
    postAnnouncement: async (params: Announcement) => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/announcement/new`,
        params,
      );
    },
    putAnnouncement: async (params: Announcement) => {
      return await this.instance.put(
        `${import.meta.env.VITE_API_URL}/announcement/${params.announcementId}`,
        params,
      );
    },
    deleteAnnouncement: async (params: Announcement) => {
      return await this.instance.delete(
        `${import.meta.env.VITE_API_URL}/announcement/${params.announcementId}`,
      );
    },
  };
  image = {
    postImage: async (params: Image) => {
      const formData = new FormData();
      formData.append('file', params.image);
      return await this.instance({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/image/upload`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
    },
  };
  user = {
    getAll: async (): Promise<User[]> => {
      return await this.instance
        .get(`${import.meta.env.VITE_API_URL}/user/all`)
        .then(res => res.data);
    },
    getOne: async (params: User): Promise<User> => {
      return await this.instance
        .get(`${import.meta.env.VITE_API_URL}/user/${params.userId}`)
        .then(res => res.data);
    },
    postUser: async (params: User) => {
      return await this.instance.post(
        `${import.meta.env.VITE_API_URL}/user/new`,
        params,
      );
    },
    putUser: async (params: User) => {
      return await this.instance.put(
        `${import.meta.env.VITE_API_URL}/user/${params.userId}`,
        params,
      );
    },
    deleteUser: async (params: User) => {
      return await this.instance.delete(
        `${import.meta.env.VITE_API_URL}/user/${params.userId}`,
      );
    },
  };

  private instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });
}
