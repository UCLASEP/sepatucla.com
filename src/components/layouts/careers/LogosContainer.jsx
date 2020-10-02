/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogosContainer = ({logos}) => (
  <Container>
    {logos.map(logo => {
      return (
        <Logo
          src={require(`../../../../assets/images/careers/new/${logo.src}.svg`)}
          alt={logo.alt}
        />
      );
    })}
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-top: 24px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  margin-right: 24px;
  margin-bottom: 24px;
  max-width: 110px;

  @media (max-width: 450px) {
    max-width: 80px;
    margin-right: 18px;
    margin-bottom: 18px;
  }
`;

LogosContainer.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LogosContainer;
