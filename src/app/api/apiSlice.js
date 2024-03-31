import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: "https://71w0x6q2-8000.inc1.devtunnels.ms",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Token ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({})
})