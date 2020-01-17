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

import MemberPhoto from '../../generic/MemberPhoto';

const Container = styled.div`
  display: flex;
  margin-right: 48px;
  margin-bottom: 48px;
`;

const Name = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 4px;
  letter-spacing: -1px;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: bold;
  color: ${GREY40};
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 4px;
`;

const Description = styled.div`
  font-size: ${TEXT_FONT_SIZES.s};
  color: ${GREY40};
  line-height: 21px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const MemberLayout = ({name, title, desc, notPictured, isDirector}) => (
  <Container>
    <MemberPhoto name={name} notPictured={notPictured} />
    <TextContainer>
      <Name>{name}</Name>
      <Title>{isDirector ? `Director, ${title}` : title}</Title>
      <Description>{desc}</Description>
    </TextContainer>
  </Container>
);

MemberLayout.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  notPictured: PropTypes.bool.isRequired,
  isDirector: PropTypes.bool,
};

MemberLayout.defaultProps = {
  isDirector: false,
};

export default MemberLayout;
