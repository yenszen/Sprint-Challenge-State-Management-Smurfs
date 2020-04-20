import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class Form extends React.Component {
  state = { name: "", age: 0, height: "0cm" };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log("Form.js: onFormSubmit", this.state);
    this.props.addSmurf(this.state);
    this.setState({ name: "", age: 0, height: "0cm" });
  };

  render() {
    return (
      <div className="ui grid">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form twelve wide column centered"
        >
          <div className="three fields">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                value={this.state.age}
                onChange={e => this.setState({ age: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="height">Height</label>
              <input
                type="text"
                name="height"
                value={this.state.height}
                onChange={e => this.setState({ height: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="small ui primary button">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(Form);
