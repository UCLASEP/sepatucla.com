/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  PADDING,
  MARGINS,
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  GREY40,
  PRIMARY_GREEN,
  GREY80,
  GREY70,
} from '../../styles/global';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-left: ${PADDING.xl};
  margin: ${MARGINS.l} 0;
  max-height: 500px;

  @media (max-width: 1300px) {
    margin: ${MARGINS.m} 0;
  }

  @media (max-width: 1100px) {
    padding-left: ${PADDING.l};
  }

  @media (max-width: 870px) {
    padding-left: 0;
    justify-content: center;
  }

  @media (max-width: 450px) {
    margin: ${MARGINS.s};
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;

  @media (max-width: 1300px) {
    flex: 1.5;
  }

  @media (max-width: 870px) {
    align-items: center;
    text-align: center;
  }
`;

const MiniTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: 500;
  letter-spacing: 4px;
  color: ${GREY40};
  text-transform: uppercase;
  margin: ${MARGINS.xs} 0;
`;

const MainTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.l};
  font-weight: bold;
  color: ${PRIMARY_GREEN};
  margin-bottom: 30px;

  @media (max-width: 1300px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: 600;
  letter-spacing: -1px;
  color: ${GREY80};
  margin: ${MARGINS.s} 0;

  @media (max-width: 1300px) {
    font-size: ${TEXT_FONT_SIZES.m};
  }
`;

const Blurb = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  color: ${GREY70};
  max-width: 370px;
  line-height: 1.56;

  @media (max-width: 1300px) {
    font-size: ${TEXT_FONT_SIZES.s};
  }
`;

const HeroImage = styled.img`
  flex: 2;
  margin-left: 100px;
  max-width: 100%;
  object-fit: cover;
  display: auto;

  @media (max-width: 1300px) {
    flex: 1.5;
    margin-left: 80px;
  }

  @media (max-width: 1150px) {
    flex: 1;
  }

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;

const PageHero = ({miniTitle, title, subtitle, blurb, heroImg}) => (
  <Container>
    <TextSection>
      <MiniTitle>- {miniTitle}</MiniTitle>
      <MainTitle>{title}</MainTitle>
      <SubTitle>{subtitle}</SubTitle>
      <Blurb>
        {blurb.split('<br/>').map(text => (
          <span key={text}>
            {text}
            <br />
          </span>
        ))}
      </Blurb>
    </TextSection>
    <HeroImage src={require(`../../../assets/images/${heroImg}.png`)} />
  </Container>
);

PageHero.propTypes = {
  miniTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  heroImg: PropTypes.string.isRequired,
};

export default PageHero;
