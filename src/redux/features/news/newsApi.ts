import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ search = "", category = "", source = "" }) => {
        let url = "/articles";
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (category) params.append("category", category);
        if (source) params.append("source", source);

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return url;
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
