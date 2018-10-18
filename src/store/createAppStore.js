// IMPORT PACKAGE REFERENCES

import { applyMiddleware, createStore } from 'redux'; // export const createStore
import thunkMiddleware from 'redux-thunk'; // export default thunkMiddleware 
import { createLogger } from 'redux-logger';  // export const createLogger
 
// IMPORT REDUCERS

import { AppReducer } from './reducers/createAppReducer'; // export const AppReducer

const AppStore = createStore(
    AppReducer,
    //defaultState,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);

export default AppStore;