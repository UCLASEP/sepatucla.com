/* eslint-disable react/prop-types */

import React from 'react';
import styled, {css} from 'styled-components';

import PageLayout from '../components/layouts/PageLayout';
import FadeInSection from '../components/generic/FadeInSection';

import Left from '../../assets/images/recruitment/left.png';
import Right from '../../assets/images/recruitment/right.png';
import LeftNarrow from '../../assets/images/recruitment/narrow-left.png';
import RightNarrow from '../../assets/images/recruitment/narrow-right.png';

import FbBanner from '../../assets/images/recruitment/recruitment_banner.png';

import {PRIMARY_GREEN} from '../styles/global';

import RUSH_INFO from '../constants/rush-info';

import useWindowWidth from '../util/useWindowWidth';

const AccentText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #222222;
  opacity: 0.7;
`;

const MemberImage = styled.img`
  height: 570px;

  @media (max-width: 1300px) {
    height: 500px;
  }
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 52px;
  line-height: 62px;
  color: ${PRIMARY_GREEN};

  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;

const Bold = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -1px;
  margin: 16px 0px;

  ${props =>
    props.resize &&
    css`
      @media (max-width: 1300px) {
        font-size: 20px;
        margin: 8px 0px;
      }
    `};

  @media (max-width: 1000px) {
    font-size: 20px;
    margin: 4px 0px;
    line-height: 28px;
  }
`;

const GreyText = styled.div`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #222222;
  opacity: 0.7;

  /* ${props =>
    props.resize &&
    css` */
      @media (max-width: 1300px) {
        font-size: 16px;
      }
    /* `}; */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  width: 218px;
  height: 50px;
  font-size: 14px;
  padding: 14px;
  letter-spacing: 4px;
  color: white;
  background-color: ${PRIMARY_GREEN};

  @media (max-width: 800px) {
    width: 150px;
    height: 40px;

    font-size: 12px;
  }
`;

const VerticalBorder = styled.div`
  width: 0px;
  height: 66px;
  left: 680px;
  top: 523px;
  border: 1px solid #e0e0e0;
  margin: 36px;

  ${props =>
    props.resize &&
    css`
      @media (max-width: 1300px) {
        height: 33px;
      }
    `};

  @media (max-width: 1000px) {
    margin: 16px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  width: 400px;

  @media (max-width: 1400px) {
    width: 300px;
  }

  @media (max-width: 800px) {
    width: 250px;
  }
`;

// eslint-disable-next-line react/prop-types
const Date = ({title, date, location, dress}) => (
  <DateContainer>
    <VerticalBorder
      style={{height: '120px', margin: '0px 12px', border: '2px solid #E0E0E0'}}
    />
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Bold style={{margin: '4px 0px'}}>{title}</Bold>
      <AccentText>{date}</AccentText>
      <Text>{location}</Text>
      <Text>{dress}</Text>
    </div>
  </DateContainer>
);

const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 300px;

  @media (max-width: 1400px) {
    padding: 100px 250px;
  }

  @media (max-width: 1100px) {
    padding: 50px 100px;
  }

  @media (max-width: 550px) {
    padding: 50px;
  }
`;

const DatesSpecificContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0px;

  @media (max-width: 550px) {
    padding: 0px 50px;
  }

  @media (max-width: 450px) {
    padding: 0px;
  }
`;

const Dates = () => (
  <DatesContainer>
    <div>
      <AccentText>- Come join us!</AccentText>
      <br />
      <Text>
        We encourage our brothers and sisters to jump headfirst into their
        passions without looking back.
      </Text>
      <Text>Are you an independent thinker? Want to carve your own path? <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfWT9quPp5FSmF7PJxavzGHF_-9gCDzJ2N8XZ2VBn_7igHabA/viewform"
        rel="noopener noreferrer"
        target="_blank"
      >Join Today!</a></Text>

    </div>
    <DatesSpecificContainer>
      {RUSH_INFO.map(({title, date, location, dress}) => (
        <FadeInSection key={title}>
          <Date title={title} date={date} location={location} dress={dress} />
        </FadeInSection>
      ))}
    </DatesSpecificContainer>
    <Text>
      For any rush related questions, feel free to text our rush chair Austin Pham @ 949-244-4035{' '}
    </Text>
  </DatesContainer>
);

const RushInterestButton = ({tabIndex, margin = '24px'}) => (
  <LinkContainer
    href="https://docs.google.com/forms/d/e/1FAIpQLSfWT9quPp5FSmF7PJxavzGHF_-9gCDzJ2N8XZ2VBn_7igHabA/viewform" // UPDATE RUSH FB LINK
    target="_blank"
    rel="noopener noreferrer"
    margin={margin}
  >
    <Button className="button" role="button" tabIndex={tabIndex}>
      Come Rush

    </Button>
  </LinkContainer>
);

const FacebookEventButton = ({tabIndex, margin = '24px'}) => (
  <LinkContainer
    href="https://www.facebook.com/events/644554040265135"
    target="_blank"
    rel="noopener noreferrer"
    margin={margin}
  >
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button className="button" role="button" tabIndex={tabIndex}>
      Entrepreneurship Event
    </Button>
  </div>
  </LinkContainer>
);

const LinkContainer = styled.a`
  text-decoration: none;
  margin-top: ${props => props.margin};
  align-items: center;

  @media (max-width: 1000px) {
    margin: 10px;
  }

  @media (max-width: 800px) {
    align-self: center;
  }
`;

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 120px;

  @media (max-width: 1300px) {
    padding: 20px 80px;
  }

  @media (max-width: 1000px) {
    padding: 5px 60px;
  }

  @media (max-width: 450px) {
    padding: 5px 30px;
  }
`;

const LeftImage = ({windowWidth}) => {
  if (windowWidth < 830) return <></>;
  if (windowWidth < 1130)
    return <MemberImage src={LeftNarrow} alt="Members of Sigma Eta Pi" />;
  return <MemberImage src={Left} alt="Members of Sigma Eta Pi" />;
};

const RightImage = ({windowWidth}) => {
  if (windowWidth < 830) return <></>;
  if (windowWidth < 1130)
    return <MemberImage src={RightNarrow} alt="Members of Sigma Eta Pi" />;
  return <MemberImage src={Right} alt="Members of Sigma Eta Pi" />;
};

const Main = ({windowWidth}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '48px',
    }}
  >
    <LeftImage windowWidth={windowWidth} />
    <BannerTextContainer>
      <AccentText>- come join us!</AccentText>
      <Header>Recruitment</Header>
      <Bold>Fall Rush 2021&emsp;|&emsp;Sept 27th - Sept 30th</Bold>
      <RushInterestButton tabIndex={0} />
      <VerticalBorder resize />
      <FacebookEventButton tabIndex={0} />
      <VerticalBorder resize />
      <GreyText resize>
        Although vastly diverse and widespread, our SEP family shares one
        distinct objective:
      </GreyText>
      <Bold resize>do what you love.</Bold>
    </BannerTextContainer>
    <RightImage windowWidth={windowWidth} />
  </div>
);




const FbLink = () => (
  <FadeInSection>
    <RecruitmentAdditionalSection
      title="event details"
      desc="For more details, check out our Facebook event page"
      isFb
    >
      <a
        href="https://www.facebook.com/events/644554040265135" // UPDATE FB EVENT LINK
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          style={{width: '100%', height: 'auto', margin: '24px 0'}}
          src={FbBanner}
          alt="Facebook Rush Event Banner with event details and dates."
        />
      </a>
    </RecruitmentAdditionalSection>
  </FadeInSection>
);


const Sponsorship = () => (
  <FadeInSection>
    <RecruitmentAdditionalSection
      title="sponsorship"
      desc="A huge thank you to this year's sponsors!"
    >
      <>{/* Add sponsorship logos here */}</>
    </RecruitmentAdditionalSection>
  </FadeInSection>
);

 const AdditionalSectionConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px;
  border-top: 3px solid #f2f2f2;
  margin: 50px 200px;

  @media (max-width: 1100px) {
    margin: 50px 100px;
    padding: 25px 50px;
  }

  @media (max-width: 800px) {
    margin: 25px 50px;
    padding: 25px 0px;
  }
`; 


 const AdditionalSectionSubContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`; 


const RecruitmentAdditionalSection = ({title, desc, isFb, children}) => (
  <AdditionalSectionConatiner>
    <AdditionalSectionSubContainer>
      <div>
        <AccentText>- {title}</AccentText>
        <Bold style={{margin: '10px 0px'}}>{desc}</Bold>
      </div>
      {isFb && <RushInterestButton margin="0px" tabIndex={-1} />}
    </AdditionalSectionSubContainer>
    {children}
  </AdditionalSectionConatiner>
); 

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    iframe {
      height: 300px;
      width: 500px;
    }
  }
`; 




const Video = () => (
  <FadeInSection>
    <VideoContainer>
      <iframe
        src="https://vimeo.com/607013125" // UPDATE RUSH VIDEO LINK
        style={{border: 'none'}}
        width="1028"
        height="628"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        title="Recruitment Video"
      />
    </VideoContainer>
  </FadeInSection>
);


const RecruitmentPage = () => {
  const windowWidth = useWindowWidth();

  return (
    <PageLayout title="Recruitment -- UCLA Sigma Eta Pi" location="recruitment">
      <Main windowWidth={windowWidth} />
      <Dates />
       <Video /> 
      <FbLink />  
    </PageLayout>
  );
};

export default RecruitmentPage;
