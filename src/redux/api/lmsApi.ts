import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lmsApi = createApi({
  reducerPath: 'lmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  tagTypes: ['Entity'],
  endpoints: (builder) => ({
    getEntities: builder.query<any[], string>({
      query: (endpoint) => endpoint,
      providesTags: (_result, _error, endpoint) => [{ type: 'Entity', id: endpoint }],
    }),
  }),
});

export const { useGetEntitiesQuery } = lmsApi;
