import React from 'react';
import PropTypes from 'prop-types';

export const Album = ({ value }) => (
  <div className="inline">
    Album: <h3 className="title">{value}</h3>
  </div>
);

Album.propTypes = {
  value: PropTypes.string
};
