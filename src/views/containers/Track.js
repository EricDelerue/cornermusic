// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { playTrack } from '../../store/actions/PlayTrackActions';


// CONFIGURE COLORS

let bgColors = ['bg-light', 'bg-secondary'];
let colors = ['text-dark', 'text-light'];

// COMPONENT

//const renderRedirect = (url) => {
//      return <Redirect to='${url}' />
//}

//const redirectToSearch = () => {
//    this.props.history.push(`/search`)
//}
  
const millisToMinutesAndSeconds = (millis) => { 
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


const Track = (props) => {

    const index = props.index % 2;
    const className = `card mb-3 animated fadeIn ${bgColors[index]} ${colors[index]}`;
    const { track } = props;
    const showTrack = track.title !== '';

    const month = new Array();
		month[0] = "Jan";
		month[1] = "Fe";
		month[2] = "Mar";
		month[3] = "Apr";
		month[4] = "May";
		month[5] = "Jun";
		month[6] = "Jul";
		month[7] = "Aug";
		month[8] = "Sept";
		month[9] = "Oct";
		month[10] = "Nov";
		month[11] = "Dec";    
		const date = new Date(track.release);
    //const utc_date = date.toUTCString();
    const month_name = month[date.getMonth() + 1];
    const year = date.getFullYear();
    
    const duration = millisToMinutesAndSeconds(parseInt(track.duration, 10));

    return (
        <div>
        
          {
          showTrack &&        
					<div className={className}>
					  <div className="card_left">
							<img
							  className="artwork content__artwork"
							  src={track.thumb100.replace('100x100', '200x200')}
							  alt=""
							/> 
					  </div>
					  <div className='card_right'>
					    <h1>{track.title ? track.title : 'Untitled'}</h1>
					    <h2>By {track.artist ? track.artist : 'Unknown'}</h2>
					    <div className='card_right__details'>
					      <ul>
					        <li>{month_name} {year}</li>
					        <li>{duration}</li>
					        <li>{track.genre}</li>
					      </ul>        
					      <div className='card_right__button'>
					        <Link to={`/play/${track.index}`}>LISTEN</Link>
					      </div>
					    </div>
					  </div>
					</div>
          }

            {
                !showTrack &&
                <div className={className} style={{ maxWidth: '20rem' }}>
                    <div className="card-body">
                        <p className="card-text">No track found.</p>
                    </div>
                </div>
            }
        </div>
    );
};

// CONFIGURE COMPONENT PROP TYPES

Track.propTypes = {
    track: PropTypes.object,
    index: PropTypes.number,
    playTrack: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ playTrack }, dispatch);
};

const hoc = connect(null, mapDispatchToProps)(Track);

// EXPORT COMPONENT

export { hoc as Track };