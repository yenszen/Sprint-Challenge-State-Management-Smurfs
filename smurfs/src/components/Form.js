import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class Form extends React.Component {
  state = { name: "", age: 0, height: "0cm" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log("Form.js: onFormSubmit", this.state);
    this.props.addSmurf(this.state);
    this.setState({ name: "", age: 0, height: "0cm" });
  };

  render() {
    return (
      <div>
        <h3>Add new smurf</h3>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={e =>
              this.setState({ age: e.target.value.replace(/\D/, "") })
            }
          />
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="age"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(Form);
