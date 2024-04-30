import axios, {AxiosRequestConfig} from 'axios';

const baseURL = 'https://api.extrazone.com';

type User = {
  email?: string;
  isPremium?: number;
  name?: string;
  premiumExpirationDate?: null;
  premiumStartDate?: null;
  surname?: string;
  userId?: string;
  verified?: number;
  version?: number;
};
interface ApiResponse {
  status: number;
  error?: string;
  access_token?: string;
  message?: string;
  storyData?: any;
  user?: User;
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
    return {
      status: error.response?.status || 500,
      error: error.response?.data?.error || 'Bilinmeyen Hata',
    };
  }
};
