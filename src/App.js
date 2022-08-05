import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import "./css/App.css";
import "./css/MenuItems.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
          <Switch>
            <Route path="/:sport/:category/:subcategory/:game_name/:game_id/:tab">
              <Home />
            </Route>
            <Route path="/:sport/:category/:subcategory/:game_name/:game_id">
              <Home />
            </Route>
            <Route path="/:sport">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
