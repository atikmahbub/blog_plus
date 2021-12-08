import { Stack, Typography } from "@mui/material";
import React from "react";

type BlogCardProps = {
  title: string;
  id: string;
  details: string;
};
const BlogCard = ({ title, id, details }: BlogCardProps) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="caption">created : 26th January,2021</Typography>
      </Stack>
      <Typography variant="body1">{details}</Typography>
    </Stack>
  );
};

export default BlogCard;
