import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  BLACK,
  GREY40,
  MARGINS,
} from '../../../styles/global';

import LogosContainer from './LogosContainer';
import FadeInSection from '../../generic/FadeInSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${MARGINS.m};
`;

const Title = styled.div`
  color: ${BLACK};
  font-size: ${HEADER_FONT_SIZES.m};
  margin-bottom: ${MARGINS.xs};
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: 1100px) {
    font-size: ${HEADER_FONT_SIZES.s};
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Description = styled.div`
  color: ${GREY40};
  font-size: ${TEXT_FONT_SIZES.m};

  @media (max-width: 600px) {
    font-size: ${TEXT_FONT_SIZES.s};
  }
`;

const IndustryContainer = ({name, desc, logos}) => (
  <Container>
    <FadeInSection>
      <Title>{name}</Title>
      <Description>{desc}</Description>
      <LogosContainer logos={logos} />
    </FadeInSection>
  </Container>
);

IndustryContainer.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IndustryContainer;
