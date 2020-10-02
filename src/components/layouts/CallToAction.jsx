/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import {
  MARGINS,
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  PRIMARY_GREEN,
  GREY80,
} from '../../styles/global';

const Container = styled.div`
  width: 100%;
  margin: ${MARGINS.s} 0;
  max-height: 500px;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: 600;
  letter-spacing: -1px;
  align-items: center;
  justify-content: center;
  color: ${GREY80};
  margin: ${MARGINS.s} auto;
  max-width: 500px;
  @media (max-width: 1024px) {
    font-size: ${TEXT_FONT_SIZES.l};
  }
`;

const Border = styled.div`
  height: 3px;
  width: 82%;
  background-color: #f2f2f2;
  margin: ${MARGINS.m} auto;
`;

const ViewSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 218px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;
  margin: 40px auto ${MARGINS.l} auto;
  color: white;
  background-color: ${PRIMARY_GREEN};
`;

const PageHero = ({title, buttonTitle, link}) => (
  <Container>
    <Border />
    <Title>{title}</Title>
    <Link to={`/${link}`} style={{textDecoration: 'none'}}>
      <ViewSelectorButton className="button" role="button" tabIndex={0}>
        {buttonTitle}
      </ViewSelectorButton>
    </Link>
  </Container>
);

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PageHero;
