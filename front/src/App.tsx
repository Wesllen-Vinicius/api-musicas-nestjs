import { BrowserRouter } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import Rotas from "./routes";
import {  ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LayoutWrapper>
          <Rotas />
        </LayoutWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
