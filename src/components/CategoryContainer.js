import * as React from "react";
import { Stack } from "@mui/material";
import { ItemListContainer } from "./ItemListContainer";
import { useParams } from "react-router-dom";

export const CategoryContainer = () => {
  const { category } = useParams();
  return (
    <>
      <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap" }}>
        <Stack spacing={2} sx={{ maxWidth: "80%" }}>
          <ItemListContainer category={category} />
        </Stack>
      </Stack>
    </>
  );
};
