// PACKAGE REFERENCES

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// PROJECT REFERENCES

import { Header } from "../components/shared/Header"; // export const Header
import { Loader } from "../components/shared/Loader"; // export const Loader

import { PlayerContent } from "../components/PlayerContent"; // export const PlayerContent

// COMPONENT

//const Player = () => {

//}

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    console.log("class Player this.props", this.props);
    //console.log('class Player this.props.currentTrack',this.props.currentTrack);
    //console.log('class Player this.props.history',this.props.history);
  }

  render() {
    const page = "player";

    return this.props.currentTrack ? (
      <Fragment>
        <Header page={page} />
        <div className="mt-4 subheader">
          {/*<nav className="menu">
		        <ul className="navigation">
		          <li><NavLink to='/' activeClassName='menu selected' exact={true}><i className="fa fa-arrow-left fa"></i>&nbsp;New search</NavLink></li>
		          <li>&nbsp;</li>
		          <li>&nbsp;</li>
		        </ul>
		      </nav>*/}
        </div>
        <div className="mx-5 mt-2">
          <PlayerContent
            current={this.props.currentTrack}
            previous={this.props.previousTrack}
            next={this.props.nextTrack}
          />
        </div>
      </Fragment>
    ) : (
      <Loader busy={!this.props.currentTrack} />
    );
  }
}

// CONFIGURE COMPONENT PROP TYPES

Player.propTypes = {
  currentTrack: PropTypes.object //.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = (state, ownProps) => {
  // => /play/:trackId
  const trackIndex = parseInt(ownProps.match.params.trackId, 10);

  const currentTrack = state.appState.tracks.find(
    track => track.index == trackIndex
  );

  const tracksNumber = parseInt(state.appState.tracks.length, 10) - 1;
  const previousTrackIndex = parseInt(
    trackIndex - 1 < 0 ? tracksNumber : trackIndex - 1,
    10
  );
  const nextTrackIndex = parseInt(
    trackIndex + 1 > tracksNumber ? 0 : trackIndex + 1,
    10
  );

  if (currentTrack) {
    return {
      currentTrack,
      previousTrack: previousTrackIndex,
      nextTrack: nextTrackIndex
    };
  } else {
    return {
      currentTrack: {},
      previousTrack: null,
      nextTrack: null
    };
  }

  // TO DO: take the selected track from the new state
  //const { currentTrack } = state.appState;

  //return {
  //	  currentTrack
  //};
};

const hoc = connect(
  mapStateToProps,
  null
)(Player);

// EXPORT COMPONENT

export { hoc as Player };
