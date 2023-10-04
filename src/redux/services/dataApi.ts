import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type DataType = {
  id: string;
  name: string;
  priority: string;
  todo: string;
  completed: boolean;
  createdAt: Date;
};

export const dataApi = createApi({
  reducerPath: "dataApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do",
  }),
  endpoints: (builder) => ({
    getData: builder.query<DataType[], null>({
      query: () => "",
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
