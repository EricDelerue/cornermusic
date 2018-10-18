import React from 'react';
import PropTypes from 'prop-types';

export const Artist = ({ value }) => (
  <div className="inline">
    <h3 className="artist"><span className="label">Artist: </span>{value}</h3>
  </div>
);

Artist.propTypes = {
  value: PropTypes.string
};
