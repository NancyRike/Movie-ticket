import axios from 'axios';

axios.interceptors.request.use(
    async (config) => {
        config.headers = {
        ...config.headers,
        'X-RapidAPI-Key': '59e76ffc11mshdc0d8749176b450p1fccb0jsn5eb68a3450c6',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
//   'X-RapidAPI-Key': '59e76ffc11mshdc0d8749176b450p1fccb0jsn5eb68a3450c6',
//     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
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
