import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavLinkRouter from './components/NavLinkRouter';
import Customer from "./components/customer";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  render() {

    return(
      <React.Fragment>
        <NavLinkRouter />
      </React.Fragment>
    );
  }
}