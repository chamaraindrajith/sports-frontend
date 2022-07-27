import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import logo from "./logo.svg";
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
            <Route path="/soccer">
              <Home sport="soccer" />
            </Route>
            <Route path="/cricket">
              <Home sport="cricket" />
            </Route>
            <Route path="/basketball">
              <Home sport="basketball" />
            </Route>
            <Route path="/">
              <Home sport="cricket" />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
