import React from "react";
import PropTypes from "prop-types";

export const Album = ({ value }) => (
  <div className="inline">
    <h4 className="album">
      <span className="label">Album: </span>
      {value}
    </h4>
  </div>
);

Album.propTypes = {
  value: PropTypes.string
};
