import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NoAudioPlayer = () => (
  <>
    <nav className="menu">
      <ul className="player">
        <li>No audio file found.</li>
        <li />
        <li>
          <NavLink to="/" exact={true}>
            <button className="button--search">
              <i className="fa fa-search" />
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);
