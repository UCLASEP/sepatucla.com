import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../Navigation/NavigationBar';
// import PageFooter from '../Navigation/PageFooter';

const PageLayout = ({children, location}) => (
  <div>
    <NavigationBar activePage={location} />
    {children}
    {/* <PageFooter /> */}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.string,
};

PageLayout.defaultProps = {
  location: '/',
};

export default PageLayout;
