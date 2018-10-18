// PACKAGE REFERENCES

import { combineReducers } from 'redux';

// REDUCERS

import { FindTracksReducer } from './FindTracksReducer';

// EXPORT REDUCERS

export const AppReducer = combineReducers({	  
    appState: FindTracksReducer
});