import { Divider, Stack } from "@mui/material";
import React, { Fragment } from "react";
import BlogCard from "../../components/BlogCard";

const BlogContainer = ({ blogs }: any) => {
  return (
    <Fragment>
      {blogs
        .slice(0)
        .reverse()
        .map((item: any, i: number) => (
          <Stack key={i} mt={3} sx={{ width: "100%" }} spacing={3}>
            <BlogCard title={item.title} details={item.details} id={item.id} />
            <Divider orientation="horizontal" />
          </Stack>
        ))}
    </Fragment>
  );
};

export default BlogContainer;
