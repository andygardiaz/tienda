import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Container } from "@mui/material";
import { NavBar } from "./components/NavBar.js";

function App() {
  return (
    <>
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
          <ItemListContainer />
        </Container>
      </main>
    </>
  );
}

export default App;
