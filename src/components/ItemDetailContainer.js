import * as React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productDetails, getProductsById } = React.useContext(ProductContext);

  React.useEffect(() => {
    getProductsById(id);
  }, [id]);

  return <>{productDetails && <ItemDetail product={productDetails} />}</>;
};
