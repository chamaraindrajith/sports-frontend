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
            <Route path="/:sport/favorites/competitions">
              <Layout layout="favorites" favorite_tab="competitions" />
            </Route>
            <Route path="/:sport/favorites/matches">
              <Layout layout="favorites" favorite_tab="matches" />
            </Route>
            <Route path="/:sport/favorites">
              <Layout layout="redirect" redirectTo="/favorites/matches" />
            </Route>
            <Route path="/:sport/:category/:stage/:game_name/:game_id/:tab">
              <Layout layout="game" />
            </Route>
            <Route path="/:sport/:category/:stage/:game_name/:game_id">
              <Layout layout="game" />
            </Route>
            <Route path="/:sport/:category/:stage/:game_name/">
              <Layout layout="404" />
            </Route>
            <Route path="/:sport/:category/:stage">
              <Layout layout="stage" />
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
