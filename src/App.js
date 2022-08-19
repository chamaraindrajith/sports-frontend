import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import "./css/App.css";
import "./css/MenuItems.css";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

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
          {/* <Header /> */}
          <Switch>
            <Route path="/mobile">
              <Layout layout="mobile" />
            </Route>
            <Route path="/privacy">
              <Layout layout="privacy" />
            </Route>
            <Route path="/contact">
              <Layout layout="contact" />
            </Route>
            <Route path="/settings">
              <Layout layout="settings" />
            </Route>
            <Route path="/news">
              <Layout layout="news" />
            </Route>
            <Route path="/fan-club">
              <Layout layout="fan-club" />
            </Route>
            <Route path="/:sport/favourites/competitions">
              <Layout layout="favourites" />
            </Route>
            <Route path="/:sport/favourites/matches">
              <Layout layout="favourites" />
            </Route>
            <Route path="/:sport/favourites">
              <Layout layout="redirect" redirectTo="/favourites/matches" />
            </Route>
            <Route path="/:sport/:category/:subcategory/:game_name/:game_id/:tab">
              <Layout layout="game" />
            </Route>
            <Route path="/:sport/:category/:subcategory/:game_name/:game_id">
              <Layout layout="game" />
            </Route>
            <Route path="/:sport/:category/:subcategory/:game_name/">
              <Layout layout="404" />
            </Route>
            <Route path="/:sport/:category/:subcategory">
              <Layout layout="subcategory" />
            </Route>
            <Route path="/:sport/:category">
              <Layout layout="category" />
            </Route>
            <Route path="/:sport">
              <Layout layout="stages" />
            </Route>
            <Route path="/">
              <Layout layout="stages" />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
