import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from "../actions";

class SmurfsList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    // console.log(this.props.smurfs);
    return (
      <div>
        {this.props.smurfs ? (
          <div className="ui grid">
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id} className="four wide column">
                  <div className="ui center aligned segment">
                    <h3>{smurf.name}</h3>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                    <button
                      onClick={() => this.props.deleteSmurf(smurf.id)}
                      className="mini ui basic negative button"
                    >
                      Delete
                    </button>
                  </div>
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
