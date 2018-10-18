// ACTION CONSTANTS

import * as types from '../actions/actionTypes'; 

// INITIALIZE STATE
 
import initialState from '../initialState';

// REDUCER

export const FindTracksReducer = (state = initialState, action) => {  
  switch(action.type) {
    case types.LOAD_TRACKS_PENDING:
      return {
      	...state,
      	//tracks: [],
      	pending: true,
      	fetched: false,
      	failed: false,
        error: {} // Reset if we come from an error
      }  	
    case types.LOAD_TRACKS_SUCCESS:
      return {
      	...state,
      	tracks: action.tracks,
      	pending: false,
      	fetched: true,
      	failed: false
      }
    case types.LOAD_TRACKS_FAILURE:
      return {
      	...state,
      	tracks: [],
      	pending: false,
      	fetched: false,
      	failed: true,
      	error: action.error
      } 
    case types.SELECT_TRACK:
      return {
      	...state,
        currentTrack: action.track
      }            
    default: 
      return state;
  }
}

