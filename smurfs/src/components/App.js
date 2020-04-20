import React, { Component } from "react";
import Form from "./Form";
import SmurfsList from "./SmurfsList";

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ margin: "1rem 0" }}>
        <h2 style={{ textAlign: "center" }}>Smurfs Village</h2>
        <Form />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
