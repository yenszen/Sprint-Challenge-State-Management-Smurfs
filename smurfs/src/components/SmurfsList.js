import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class SmurfsList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        <h2>Smurfs, State Management</h2>
        {this.props.smurfs ? (
          <div>
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  <h4>{smurf.name}</h4>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Fetching Smurfs List...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
