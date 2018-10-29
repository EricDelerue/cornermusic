// PACKAGE REFERENCES

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// PROJECT REFERENCES

import { Header } from "../components/shared/Header"; // export const Header
import { Loader } from "../components/shared/Loader"; // export const Loader

import { Search } from "./Search";
import { TracksList } from "./TracksList";

// COMPONENT

class Tracks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log('class Tracks this.props.history',this.props.history);
    //console.log('class Tracks this.props.tracks',this.props.tracks);
  }

  render() {
    const page = "trackslist";

    return (
      <Fragment>
        <Header page={page} />
        <div className="mt-4 subheader">
          <Search />
        </div>
        {this.props.fetched && (
          <div className="mt-4">
            <TracksList className="m-2" />
          </div>
        )}
        {<Loader busy={this.props.pending} />}
      </Fragment>
    );
  }
}

// CONFIGURE COMPONENT PROP TYPES

Tracks.propTypes = {
  tracks: PropTypes.array //.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { pending, fetched, failed } = state.appState;

  return {
    pending,
    fetched,
    failed
  };
};

const hoc = connect(mapStateToProps)(Tracks);

// EXPORT COMPONENT

export { hoc as Tracks };
