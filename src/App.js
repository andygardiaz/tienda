import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Container, styled } from "@mui/material";
import { NavBar } from "./components/NavBar.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Cart } from "./components/Cart";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./components/checkout/Checkout";
import { CheckoutProvider } from "./Context/CheckoutContext";

const Main = styled("main")(({ theme }) => ({
  minHeight: "calc(100vh - 68.5px)",
  backgroundColor: "#f5f5f5",
}));

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <CheckoutProvider>
          <Router>
            <header>
              <NavBar />
            </header>
            <Main>
              <Container
                maxWidth="lg"
                sx={{
                  paddingTop: "3rem",
                  paddingBottom: "3rem",
                }}
              >
                <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/items/:id" element={<ItemDetailContainer />} />
                  <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Container>
            </Main>
          </Router>
        </CheckoutProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
