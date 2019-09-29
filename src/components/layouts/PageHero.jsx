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
  max-height: 500px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
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
`;

const SubTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: 600;
  letter-spacing: -1px;
  color: ${GREY80};
  margin: ${MARGINS.s} 0;
`;

const Blurb = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  color: ${GREY70};
  max-width: 370px;
  line-height: 1.56;
`;

const HeroImage = styled.img`
  flex: 2;
  margin-left: 100px;
  max-width: 100%;
  object-fit: cover;
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
