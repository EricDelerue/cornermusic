
// PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PROJECT REFERENCES

import { Tracks } from './containers/Tracks'; // export const Tracks
import { Player } from './containers/Player'; // export const Player

// COMPONENT 

const App = ({ store }) => (
  <Provider store={store}>
    <Router>      
      <Fragment>
		      <Switch>
		        <Route exact path='/' component={Tracks} />
		        <Route exact path="/play" render={() => <Redirect to="/" />} />
		        <Route path='/play/:trackId' render={ props => <Player {...props} />} /*component={Player}*/ />
		        <Route component={Tracks} />
		      </Switch>
		   </Fragment>   
    </Router>
  </Provider>
); 

App.propTypes = {
  store: PropTypes.object.isRequired
} 

export default App;