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

const LinksComponent = () => (
  <div style={{display: 'flex', 'justify-content': 'flex-start'}}>
    <LinkColumn>
      <ColumnHeader>Membership</ColumnHeader>
      <Link to="/members">Active Members</Link>
      <Link to="/exec">Executive Board</Link>
      <Link to="/sister-chapters">Sister Chapters</Link>
    </LinkColumn>
    <LinkColumn>
      <ColumnHeader>Entrepreneurship</ColumnHeader>
      <Link to="/careers">Careers</Link>
      <Link to="/ventures">Ventures</Link>
      <Link to="/bruintank">BruinTank</Link>
    </LinkColumn>
    <LinkColumn>
      <ColumnHeader>Join us!</ColumnHeader>
      <Link to="/recruitment">Recruitment</Link>
    </LinkColumn>
  </div>
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
