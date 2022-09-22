import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import NavigationBar from '../Navigation/NavigationBar';
import PageFooter from '../Navigation/PageFooter';

const PageLayout = ({children, location, title}) => {
  if (typeof window !== 'undefined') {
    return (
      <div>
        <Helmet title={title} />
        <NavigationBar initialWidth={window.innerWidth} activePage={location} />
        {children}
        <PageFooter />
      </div>
    );
  }

  return null;
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PageLayout.defaultProps = {
  location: '/',
};

export default PageLayout;
