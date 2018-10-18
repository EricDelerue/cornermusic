import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ButtonLink = ({ LinkClassName, ButtonClassName, ButtonClickFunction, iconType, to }) => (
  <>
    <NavLink className={`link ${LinkClassName}`} to={to}>
      <button className={`button ${ButtonClassName}`} onClick={ButtonClickFunction} >
        <i className={`fa fa-${iconType}`}></i>
      </button>
    </NavLink>
  </>
);