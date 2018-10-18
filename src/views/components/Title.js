import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <div className="inline">
    <h2 className="title">{title}</h2>
    <span className="" />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

