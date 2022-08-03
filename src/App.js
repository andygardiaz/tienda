import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Container } from "@mui/material";
import { NavBar } from "./components/NavBar.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CategoryContainer } from "./components/CategoryContainer";
import { Cart } from "./components/Cart";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <header>
            <NavBar />
          </header>
          <main>
            <Container
              maxWidth="lg"
              sx={{
                paddingTop: "3rem",
              }}
            >
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/categories" element={<CategoryContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Container>
          </main>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
