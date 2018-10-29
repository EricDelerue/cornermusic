// PACKAGE REFERENCES

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// PROJECT REFERENCES

import { fetchTracksAction as fetchTracks } from "../../store/actions/TracksActions"; // export const { fetchTracksAction as fetchTracks }

// COMPONENT

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };

    this.onFilterChangeHandler = this.onFilterChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onFilterChangeHandler(e) {
    const filter = e.target.value;
    this.setState(() => ({ filter }));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if (this.state.filter === "") return;
    this.props.fetchTracks(this.state.filter);
    this.setState(() => ({ filter: "" }));
  }

  render() {
    return (
      <form className="animated fadeIn" onSubmit={this.onSubmitHandler}>
        <div className="input-group mb-3 col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for an artist..."
            value={this.state.filter}
            onChange={this.onFilterChangeHandler}
          />

          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit">
              SEARCH
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// CONFIGURE COMPONENT PROP TYPES

Search.propTypes = {
  fetchTracks: PropTypes.func
};

// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTracks }, dispatch);
};

const hoc = connect(
  null,
  mapDispatchToProps
)(Search);

// EXPORT COMPONENT

export { hoc as Search };
