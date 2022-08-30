import * as React from "react";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [productDetails, setProductDetails] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const getCategory = (category) => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection, where("categoryId", "==", category));

    getDocs(q).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
    });
  };

  const getProducts = () => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection);

    getDocs(q).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
    });
  };

  const getProductsById = (id) => {
    const db = getFirestore();
    const q = doc(db, "items", id);

    getDoc(q).then((snapshot) =>
      setProductDetails({ id: snapshot.id, ...snapshot.data() })
    );
  };

  const getCategoriesCollection = () => {
    const db = getFirestore();
    const q = collection(db, "categories");

    getDocs(q).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCategories(docs);
    });
  };

  const getProductsByCategory = (category) => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    const q = query(itemsCollection, where("category_id", "==", category));

    getDocs(q).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
    });
  };

  React.useEffect(() => {
    getCategoriesCollection();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        productDetails,
        getCategory,
        getProducts,
        getProductsById,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
