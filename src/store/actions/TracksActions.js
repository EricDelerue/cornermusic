// ACTION CONSTANTS

import * as types from "./actionTypes";

// IMPORT SERVICES

import { fetchTracksApi } from "../../services/fetchTracksApi";

// Action Creators

export function loadTracksPending() {
  return {
    type: "LOAD_TRACKS_PENDING",
    tracks: []
  };
}

export function loadTracksSuccess(tracks) {
  return {
    type: "LOAD_TRACKS_SUCCESS",
    tracks
  };
}

export function loadTracksFailure(error) {
  return {
    type: "LOAD_TRACKS_FAILURE",
    error
  };
}

export function fetchTracksAction(filter) {
  // Make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(loadTracksPending());

    return fetchTracksApi(filter)
      .then(tracks => {
        Array.isArray(tracks)
          ? dispatch(loadTracksSuccess(tracks))
          : dispatch(loadTracksFailure(tracks));

        //dispatch( loadTracksSuccess(tracks) );
      })
      .catch(error => {
        dispatch(loadTracksFailure(error));

        //throw(error);
      });
  };
}
