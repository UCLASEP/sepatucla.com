import React, {useState, useEffect} from 'react';

import styled from 'styled-components';
import {Link} from 'gatsby';
import PageLayout from '../components/layouts/PageLayout';
import CallToAction from '../components/layouts/CallToAction';

import FacebookIcon from '../../assets/images/icons/facebook-icon.svg';
import MediumIcon from '../../assets/images/icons/medium.svg';
import InstagramIcon from '../../assets/images/icons/instagram.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin.svg';
import gallery from '../../assets/images/gallery/temp.png';
import people from '../../assets/images/gallery/people.png';
import farout from '../../assets/images/gallery/farout.png';

import {
  MARGINS,
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  GREY40,
  PRIMARY_GREEN,
  GREY70,
  BLACK,
} from '../styles/global';

// use 700px or 40%
const MainTitle = styled.div`
  margin-left: ${MARGINS.l};
  margin-top: ${MARGINS.s};
  font-size: ${HEADER_FONT_SIZES.l};
  font-weight: bold;
  color: ${PRIMARY_GREEN};
  margin-bottom: 30px;
  max-width: 700px;
`;

const Container = styled.div`
  display: flex;
  margin: 9px
  flex-direction: row;
  width: 92.3%
`;

// column for socials 105 for s, 155 for m
const SocialColumn = styled.div`
  display: flex;
  width: 100px;
  margin-top: 105px;
  margin-left: auto;
  a {
    color: black;
    opacity: 100%;
    text-decoration: none;
    margin-right: 8px;
    cursor: pointer;
    :hover {
      opacity: 70%;
    }
  }
`;

const HeaderContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: ${MARGINS.l};
`;

const HeaderTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.m};
  font-weight: bold;
  text-align: center;
`;

const HeaderSubtext = styled.div`
  margin-top: ${MARGINS.s};
  font-size: ${TEXT_FONT_SIZES.m};
  text-align: center;
  width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderGreen = styled.span`
  font-size: ${TEXT_FONT_SIZES.m};
  text-align: center;
  font-weight: bold;
  color: ${PRIMARY_GREEN};
`;

const ViewSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 309px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;
  margin: 40px auto ${MARGINS.l} auto;
  color: white;
  background-color: ${PRIMARY_GREEN};
`;

const CaptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${MARGINS.m};
`;

const CaptionPart = styled.div`
  font-size: ${HEADER_FONT_SIZES.ml};
  font-weight: 600;
`;

const GreenCaptionPart = styled.div`
  font-size: ${HEADER_FONT_SIZES.ml};
  font-weight: 600;
  color: ${PRIMARY_GREEN};
`;

const CaptionText = styled.span`
  font-size: ${TEXT_FONT_SIZES.m};
  font-weight: 100;
  color: #222222;
  padding-left: 0px;
`;

const CaptionSeparateText = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  font-weight: 100;
  color: ${GREY70};
  font-style: italic;
  margin-left: ${MARGINS.m};
  margin-right: ${MARGINS.m};
`;

const CaptionParent = styled.div`
  align-items: center;
  text-align: center;
`;

const MemberParent = styled.div``;

const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${MARGINS.m};
  margin-bottom: ${MARGINS.m};
`;

const MemberText = styled.div`
  margin-left: ${MARGINS.xl};
`;

const EntrepreneurshipText = styled.div`
  margin-left: ${MARGINS.l};
  padding-left: 60px;
`;

const MiniTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: 500;
  letter-spacing: 4px;
  color: ${GREY40};
  text-transform: uppercase;
  margin: ${MARGINS.xs} 0;
`;

const Border = styled.div`
  height: 3px;
  width: 82%;
  background-color: #f2f2f2;
  margin: ${MARGINS.m} auto;
`;
const SubTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: 600;
  letter-spacing: -1px;
  color: ${BLACK};
  margin: ${MARGINS.s} 0;
`;

const Blurb = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  max-width: 493px;
  line-height: 1.56;
`;
//  margin: 40px auto ${MARGINS.l} auto;
const MemberSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 273px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;
  margin-top: 40px;
  color: white;
  background-color: ${PRIMARY_GREEN};
`;

const MemberPhoto = styled.div`
  margin-left: ${MARGINS.l};
`;

const EntrepreneurshipPhoto = styled.div`
  margin-left: ${MARGINS.xl};
`;

const Caption = styled.div`
  color: ${GREY70};
  font-style: italic;
  font-size: ${TEXT_FONT_SIZES.s};
  text-align: center;
  padding-top: ${MARGINS.s};
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const WorkSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 273px;
  height: 46px;
  font-size: 14px;
  letter-spacing: 4px;
  margin-top: 40px;
  margin-left: 24px;
  color: ${PRIMARY_GREEN};
  background-color: #fff;
  border: 2px solid ${PRIMARY_GREEN};
`;

// Hook for size
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const SocialsComponent = () => (
  <SocialColumn>
    <a
      href="https://www.facebook.com/sigmaetapi/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={FacebookIcon} alt="facebook icon" />
    </a>
    <a
      href="https://www.instagram.com/uclasigmaetapi/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={InstagramIcon} alt="facebook icon" />
    </a>
    <a
      href="https://medium.com/uclasep"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={MediumIcon} alt="facebook icon" />
    </a>
    <a
      href="https://www.linkedin.com/company/ucla-sigma-eta-pi/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={LinkedinIcon} alt="facebook icon" />
    </a>
  </SocialColumn>
);
const CaptionComponent = () => (
  <CaptionContainer>
    <CaptionParent>
      <CaptionPart>22+</CaptionPart> <CaptionText>Majors</CaptionText>
    </CaptionParent>

    <CaptionSeparateText>from</CaptionSeparateText>

    <CaptionParent>
      <CaptionPart>18+</CaptionPart> <CaptionText>Countries</CaptionText>
    </CaptionParent>

    <CaptionSeparateText>with</CaptionSeparateText>

    <CaptionParent>
      <GreenCaptionPart>50+</GreenCaptionPart>{' '}
      <CaptionText>Personalities</CaptionText>
    </CaptionParent>

    <CaptionSeparateText>starting</CaptionSeparateText>

    <CaptionParent>
      <CaptionPart>30+</CaptionPart> <CaptionText>Ventures</CaptionText>
    </CaptionParent>

    <CaptionSeparateText>alongside</CaptionSeparateText>

    <CaptionParent>
      <CaptionPart>1</CaptionPart> <CaptionText>family</CaptionText>
    </CaptionParent>
  </CaptionContainer>
);
const HeaderComponent = () => (
  <HeaderContainer>
    <HeaderTitle>We do things a little differently around here.</HeaderTitle>
    <HeaderSubtext>
      Although vastly diverse and widespread, our SEP family shares one distinct
      objective: <HeaderGreen>do what you love</HeaderGreen>.
    </HeaderSubtext>
    <Link to="/recruitment" style={{textDecoration: 'none'}}>
      <ViewSelectorButton role="button" tabIndex={0}>
        FALL recruitment 2020
      </ViewSelectorButton>
    </Link>
  </HeaderContainer>
);

const MemberComponent = () => (
  <MemberParent>
    <Border />
    <MemberContainer>
      <MemberText>
        <MiniTitle>— meet the members</MiniTitle>
        <SubTitle>Meet our favorite people.</SubTitle>
        <Blurb>
          Whether it’s starting a venture or an adventure, these are the
          wonferful people we do it with!
        </Blurb>
        <Link to="/members" style={{textDecoration: 'none'}}>
          <MemberSelectorButton role="button" tabIndex={0}>
            Active Members
          </MemberSelectorButton>
        </Link>
      </MemberText>
      <MemberPhoto>
        <img src={people} alt="facebook icon" width={580} style={{}} />
      </MemberPhoto>
    </MemberContainer>
  </MemberParent>
);

const EntrepreneurshipComponent = () => (
  <MemberParent>
    <Border />
    <MemberContainer>
      <EntrepreneurshipPhoto>
        <img src={farout} alt="facebook icon" width={435} style={{}} />
        <Caption>Far Out Fest Organizing Team, 2019</Caption>
      </EntrepreneurshipPhoto>
      <EntrepreneurshipText>
        <MiniTitle>— entrepreneurship</MiniTitle>
        <SubTitle>There’s something here for everyone</SubTitle>
        <Blurb>
          Some of us go off to start something right off the bat, while others
          put their expertise into helping organizations grow. There’s space
          here for everyone.
        </Blurb>
        <ButtonContainer>
          <Link to="/ventures" style={{textDecoration: 'none'}}>
            <MemberSelectorButton role="button" tabIndex={0}>
              what we’ve started
            </MemberSelectorButton>
          </Link>

          <Link to="/careers" style={{textDecoration: 'none'}}>
            <WorkSelectorButton role="button" tabIndex={0}>
              where we’ve worked
            </WorkSelectorButton>
          </Link>
        </ButtonContainer>
      </EntrepreneurshipText>
    </MemberContainer>
  </MemberParent>
);

function HomePage() {
  const size = useWindowSize();

  return (
    <PageLayout>
      <Container>
        <MainTitle>UCLA’s Premier Entrepreneurship Fraternity</MainTitle>
        <SocialsComponent />
      </Container>
      <img
        src={gallery}
        alt="facebook icon"
        width={size.width}
        style={{marginTop: MARGINS.m}}
      />
      <CaptionComponent />
      <HeaderComponent />
      <MemberComponent />
      <EntrepreneurshipComponent />
      <CallToAction
        title="Interested in doing something different?"
        buttonTitle="Join us"
        link="recruitment"
      />
    </PageLayout>
  );
}

export default HomePage;
