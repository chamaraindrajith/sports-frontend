import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./css/App.css";
import "./css/MenuItems.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Score from "./components/Score";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Header />

          <Routes>
            <Route path="/soccer" element={<Score sport="soccer" />} />
            <Route path="/basketball" element={<Score sport="basketball" />} />
            <Route path="/cricket" element={<Score sport="cricket" />} />
            <Route path="/" element={<Score sport="soccer" />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
