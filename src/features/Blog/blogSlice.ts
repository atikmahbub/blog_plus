import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BlogType = {
  id?: string;
  title: string;
  details: string;
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: [] as any,
  reducers: {
    addBlog: (state, { payload }: PayloadAction<BlogType>) => {
      state = state.push(payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;
