import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_PRODUCT_DETAIL } from "../constants";
import { ProductDetail } from "./ProductDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_PRODUCT_DETAIL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return <>{!loading && !error && data && <ProductDetail product={data} />}</>;
};
