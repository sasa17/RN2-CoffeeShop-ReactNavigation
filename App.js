import React, { Component } from "react";
import { Spinner, Header, Container } from "native-base";

// Components
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import CoffeeList from "./Components/CoffeeList";
import CoffeeDetail from "./Components/CoffeeDetail";
import CoffeeCart from "./Components/CoffeeCart";
import StackNav from "./Navigation/StackNav";
import AppContainer from "./Navigation";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
