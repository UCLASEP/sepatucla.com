import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import Logo from '../../../assets/images/general/sep-white-header.svg';
import FacebookIcon from '../../../assets/images/icons/facebook.svg';
import MediumIcon from '../../../assets/images/icons/medium-icon.svg';
import InstagramIcon from '../../../assets/images/icons/instagram-icon.svg';
import LinkedinIcon from '../../../assets/images/icons/linkedin-icon.svg';

import {PADDING, GREY90, MARGINS} from '../../styles/global';

const LogoComponent = () => (
  <LogoColumn>
    <Link to="/">
      <FooterLogo src={Logo} alt="SEP Logo" />
      <div>Sigma Eta Pi</div>
    </Link>
  </LogoColumn>
);

const LinksComponentContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1130px) {
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const LinksComponent = () => (
  <LinksComponentContainer>
    <LinkColumn>
      <ColumnHeader>Membership</ColumnHeader>
      <Link to="/members">Active Members</Link>
      <Link to="/exec">Executive Board</Link>
    </LinkColumn>
    <LinkColumn>
      <ColumnHeader>Entrepreneurship</ColumnHeader>
      <Link to="/careers">Careers</Link>
      <Link to="/ventures">Ventures</Link>
      <Link
        to="http://bruintank.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        BruinTank
      </Link>
    </LinkColumn>
    <LinkColumn>
      <ColumnHeader>Join us!</ColumnHeader>
      <Link to="/recruitment">Recruitment</Link>
    </LinkColumn>
  </LinksComponentContainer>
);

const SocialsComponent = () => (
  <SocialColumn>
    <a to="https://www.facebook.com/sigmaetapi/" rel="noopener" target="_blank">
      <img src={FacebookIcon} alt="facebook icon" />
    </a>
    <a
      to="https://www.instagram.com/uclasigmaetapi/"
      rel="noopener"
      target="_blank"
    >
      <img src={InstagramIcon} alt="facebook icon" />
    </a>
    <a to="https://medium.com/uclasep" rel="noopener" target="_blank">
      <img src={MediumIcon} alt="facebook icon" />
    </a>
    <a to="https://www.facebook.com/sigmaetapi/" rel="noopener" target="_blank">
      <img src={LinkedinIcon} alt="facebook icon" />
    </a>
  </SocialColumn>
);

const PageFooter = () => (
  <FooterContainer>
    <LogoComponent />
    <LinksComponent />
    <SocialsComponent />
  </FooterContainer>
);

const FooterContainer = styled.div`
  padding: ${PADDING.l} ${PADDING.xl};
  display: flex;
  flex-direction: row;
  background-color: ${GREY90};
  color: white;

  @media (max-width: 1130px) {
    padding: 48px;
    flex-direction: column;

    max-width: 100%;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

// column for logo
const LogoColumn = styled.div`
  width: 200px;
  margin-right: 140px;

  a {
    display: flex;
    align-items: center;

    color: white;
    text-decoration: none;
  }

  div {
    margin-left: 64px;
  }

  @media (max-width: 1250px) {
    margin-right: 50px;
  }

  @media (max-width: 1130px) {
    width: 200px;
    margin-bottom: 24px;
    width: auto;
  }
`;

// column for links
const LinkColumn = styled.div`
  margin-right: ${MARGINS.m};
  display: flex;
  flex-direction: column;
  width: 120px;

  a {
    color: white;
    opacity: 60%;
    text-decoration: none;
    margin-bottom: 8px;
    cursor: pointer;
    :hover {
      opacity: 90%;
    }
  }

  @media (max-width: 1130px) {
    margin-top: 12px;
    margin-right: ${MARGINS.l};
  }

  @media (max-width: 800px) {
    margin-right: 24px;
  }
`;

// column for socials
const SocialColumn = styled.div`
  margin-left: auto;
  display: flex;
  width: 100px;

  a {
    color: white;
    opacity: 60%;
    text-decoration: none;
    margin-right: 8px;
    cursor: pointer;
    :hover {
      opacity: 90%;
    }
  }

  @media (max-width: 1300px) {
    margin-left: -4px;
    margin-top: 18px;
  }
`;

const FooterLogo = styled.img`
  width: 51px;
  margin-right: 12px;
  position: absolute;
`;

const ColumnHeader = styled.div`
  color: white;
  margin-bottom: 8px;
`;

export default PageFooter;
