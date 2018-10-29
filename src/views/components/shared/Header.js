// IMPORT PACKAGE REFERENCES

import React from "react";

// COMPONENT

export const Header = ({ page }) => (
  <div className={`header ${page ? page : "trackslist"}`}>
    <div className="brand">
      {/*<i className="fa fa-backward fa"></i>&nbsp;
            <i className="fa fa-play fa"></i>&nbsp; 
            <i className="fa fa-pause fa"></i>&nbsp;
            <i className="fa fa-forward fa"></i>&nbsp;*/}
      <i className="fa fa-backward fa" />
      <i className="fa fa-forward fa" /> CORNER MUSIC
    </div>
  </div>
);
