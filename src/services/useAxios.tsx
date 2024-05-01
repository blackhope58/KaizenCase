import axios, {AxiosRequestConfig} from 'axios';
import {PromotionCardProps} from '../types/HomeTypes';

const baseURL = 'https://api.extrazone.com';

interface ApiResponse {
  data: PromotionCardProps[];
}

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export const useAxios = async (
  endpoint: string,
  method = 'GET',
  body: object | null = null,
): Promise<ApiResponse> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${baseURL}/${endpoint}`,
      data: method === 'POST' ? (body ? body : undefined) : undefined,
    };
    return (await instance(config)).data;
  } catch (error: any) {
    console.log(error);
  }
};
