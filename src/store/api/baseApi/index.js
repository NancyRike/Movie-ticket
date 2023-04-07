import { createApi } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config';
import { axiosBaseQuery} from './axiosBaseQuery'

export const baseApi = createApi({
      baseQuery: axiosBaseQuery({ baseUrl: BASE_URL,  prepareHeaders: (headers, { getState }) => {
    return headers;
  }
 }),

  endpoints: () => ({})
})