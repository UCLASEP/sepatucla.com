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
import FadeInSection from '../../generic/FadeInSection';

const Container = styled.div`
  display: flex;
  margin-right: 48px;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Name = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 4px;
  letter-spacing: -1px;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: bold;
  color: ${GREY40};
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 4px;

  @media (max-width: 1100px) {
    font-size: ${HEADER_FONT_SIZES.xxs};
  }
`;

const Description = styled.div`
  font-size: ${TEXT_FONT_SIZES.s};
  color: ${GREY40};
  line-height: 21px;

  @media (max-width: 1100px) {
    line-height: 18px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
    align-items: center;
    text-align: center;
  }
`;

const Major = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${GREY40};
`;

const Minor = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${GREY40};
`;


const MemberLayout = ({name, title, major, minor, desc, notPictured}) => (
  <FadeInSection>
    <Container>
      <MemberPhoto exec name={name} notPictured={notPictured} />
      <TextContainer>
        <Name>{name}</Name>
        <Title>{title}</Title> 
        <Major>{major}</Major>
        <Minor>{minor ? `Minor: ${minor}` : ''}</Minor>
        <Description>{desc}</Description>
      </TextContainer>
    </Container>
  </FadeInSection>
);

MemberLayout.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  minor: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  notPictured: PropTypes.bool.isRequired
};

/*

MemberLayout.defaultProps = {
  isDirector: false,
};
*/

export default MemberLayout;
