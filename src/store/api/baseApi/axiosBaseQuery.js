import axios from 'axios';

axios.interceptors.request.use(
    async (config) => {
        config.headers = {
        ...config.headers,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {}
  }) =>
  async ({ url, method, data, headers = {} }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: { ...baseHeaders, ...headers }
      });
      return { data: result.data };
    } 
    catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          ...(typeof err.response?.data === 'object' ? err.response.data : {})
        }
      };
    }
  };
