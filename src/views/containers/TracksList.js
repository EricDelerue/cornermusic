// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { Track } from './Track';


// RENDER HELPERS

const renderTracksList = tracks => (
    tracks.map((track, index) => renderTrackCard(index, track))
);

const renderTrackCard = (index, track) => (
    <Track key={index} index={index} track={track} />
);


// COMPONENT

const TracksList = (props) => (
    <div className="input-group mb-3 col-md-6 mx-auto">
        {
            props.tracks &&
            <div className="card-columns">
                {renderTracksList(props.tracks)}
            </div>
        }
    </div>    
);

TracksList.propTypes = {
    tracks: PropTypes.array // .isRequired
};

const mapStateToProps = state => {

    const { tracks } = state.appState;

    return {
        tracks
    };
};

const hoc = connect(mapStateToProps)(TracksList);

export { hoc as TracksList };
