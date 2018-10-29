// ACTION CONSTANTS

import * as types from "./actionTypes";

export function playTrack(track) {
  return {
    type: "SELECT_TRACK",
    track: track
  };
}
