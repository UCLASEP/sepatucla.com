import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../NavigationBar';

const PageLayout = ({children}) => (
  <div>
    <NavigationBar activePage="exec" />
    {children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
