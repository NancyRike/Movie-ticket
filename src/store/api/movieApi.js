import { baseApi } from "./baseapi";

const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: (payload) => ({
        url: `movies`,
        method: 'GET',
      }),
      providesTags: ['movies']
    }),
    getSingleMovie: builder.query({
      query: (payload) => ({
        url: `movies/${payload}`,
        method: 'GET',
      }),
      providesTags:(_, __, id)=> [{type: 'movies', id: id}]
    }),
    bookMovieTicket: builder.mutation({
      query: (payload) => ({
        url: `movies/book-movie-ticket`,
        method: 'POST',
        data: payload
      }),
    }),
   
  })
});

export const {
    useGetMovieListQuery,
    useGetSingleMovieQuery,
    useBookMovieTicketMutation,
} = moviesApi;
