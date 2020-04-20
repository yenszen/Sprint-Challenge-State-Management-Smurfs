import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from "../actions";

class SmurfsList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log(this.props.smurfs);
    return (
      <div>
        {this.props.smurfs ? (
          <div>
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  <h4>{smurf.name}</h4>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                    Delete
                  </button>
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

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(
  SmurfsList
);
