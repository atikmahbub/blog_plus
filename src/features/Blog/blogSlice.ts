import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

type BlogType = {
  id: string;
  title: string;
  details: string;
};

export const blogSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addBlog: (state, { payload }: PayloadAction<BlogType>) => {
      //   state.blogs.join(payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;
