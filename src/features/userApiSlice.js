
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
              url: '/user/signup',
              method: 'POST',
              body: data,
            }),
          }),
        verfiyOtp: builder.mutation({
          query: (data) => ({
            url: '/user/verify',
            method: 'POST',
            body: data
          })
        })
    })
})

export const { useRegisterMutation, useVerfiyOtpMutation } = userApiSlice