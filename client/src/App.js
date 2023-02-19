import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import Signup from "./pages/signup/Signup";
import Videochat from "./pages/videochat/Videochat";
import Profile from "./pages/profilePage/Profile";
import DoubtPage from "./pages/notifications/DoubtPage";
import SubmitQuestion from "./pages/submitquestion/SubmitQuestion";
import Error from "./pages/error/Error";
import LoginError from "./pages/error/LoginError";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/videochat">
          <Videochat />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/doubtpage">
          <DoubtPage />
        </Route>
        <Route exact path="/submitquestion">
          <SubmitQuestion />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
        <Route exact path="/loginerror">
          <LoginError />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
