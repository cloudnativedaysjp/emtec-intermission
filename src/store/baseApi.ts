import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '@/config'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
  endpoints: () => ({}),
})
