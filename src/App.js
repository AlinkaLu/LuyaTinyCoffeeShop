import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, MenuList } from "./components/Menu";

class App extends Component {
  state = {
    menus: [
      {
        name: "Espresso",
        price: 2.5
      },
      {
        name: "Americano",
        price: 3
      },
      {
        name: "Cappuccino",
        price: 3.5
      },
      {
        name: "Latte",
        price: 4
      }
    ]
  };
  render() {
    return (
      <div>
        <MenuList menus={this.state.menus} />
        <Button />
      </div>
    );
  }
}

export default App;
