import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",  // Your Laravel API endpoint
    credentials: "include",  // Include credentials such as cookies
  }),
  endpoints: () => ({}),
});
