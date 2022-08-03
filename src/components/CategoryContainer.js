import * as React from "react";
import { useFetch } from "../hooks/useFetch";
import { API_CATEGORIES } from "../constants";
import { CategoryFilter } from "./CategoryFilter";
import { Stack } from "@mui/material";
import { ItemListContainer } from "./ItemListContainer";

export const CategoryContainer = () => {
  const [category, setCategory] = React.useState();

  const { data, loading, error } = useFetch(API_CATEGORIES, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <>
      {!loading && !error && data && (
        <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap" }}>
          <CategoryFilter categories={data} setCategory={setCategory} />
          <Stack spacing={2} sx={{ maxWidth: "80%" }}>
            <ItemListContainer category={category} />
          </Stack>
        </Stack>
      )}
    </>
  );
};
