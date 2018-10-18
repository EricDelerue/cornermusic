import React from 'react';
import PropTypes from 'prop-types';

export const Artist = ({ value }) => (
  <div className="inline">
    By: <h3 className="title">{value}</h3>
  </div>
);

Artist.propTypes = {
  value: PropTypes.string
};
