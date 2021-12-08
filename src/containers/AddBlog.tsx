import React from "react";
import { Stack } from "@mui/material";
import CustomInput from "../components/Input/CustomInput";

const AddBlog = () => {
  return (
    <Stack spacing={3} mt={2}>
      <CustomInput
        fullWidth
        variant="filled"
        color="primary"
        label="Blog Title"
        focused
      />
      <CustomInput
        fullWidth
        variant="filled"
        label="Blog Description"
        color="primary"
        multiline
        focused
        minRows={10}
      />
    </Stack>
  );
};

export default AddBlog;
