/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  BLACK,
  GREY40,
} from '../../../styles/global';

import VenturePhoto from '../../generic/VenturePhoto';

const Container = styled.div`
  margin-right: 48px;
  margin-bottom: 48px;
`;

const Name = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 4px;
  width: 280px;
  letter-spacing: -1px;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: bold;
  color: ${GREY40};
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 4px;
  width: 280px;
`;

const Description = styled.div`
  font-size: ${TEXT_FONT_SIZES.s};
  color: ${GREY40};
  width: 280px;
  line-height: 21px;
`;

const TextContainer = styled.div`
  margin-top: 10px;
`;

const VentureLayout = ({name, title, desc}) => (
  <Container>
    <VenturePhoto name={name} />
    <TextContainer>
      <Name>{name}</Name>
      <Title> {title}</Title>
      <Description>{desc}</Description>
    </TextContainer>
  </Container>
);

VentureLayout.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default VentureLayout;
