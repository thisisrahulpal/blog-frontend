import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForYouPost: builder.query({
      query: () => ({
        url: "/post",
      }),
      transformResponse: (posts) => posts.data,
      // keepUnusedDataFor: 5,
      providesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: "/post/update",
        method: "PUT",
        body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    likedPost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/toggle/isLike/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    retweetPost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/toggle/isRetweet/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    bookmarkPost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/toggle/isBookmark/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetForYouPostQuery,
  useUpdatePostMutation,
  useLikedPostMutation,
  useRetweetPostMutation,
  useBookmarkPostMutation,
} = postApiSlice;
