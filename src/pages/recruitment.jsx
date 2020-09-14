import React from 'react';
import styled from 'styled-components';

import PageLayout from '../components/layouts/PageLayout';

import Left from '../../assets/images/recruitment/left.png';
import Right from '../../assets/images/recruitment/right.png';
import FbBanner from '../../assets/images/recruitment/recruitment_banner.png';

import {PRIMARY_GREEN} from '../styles/global';

import RUSH_INFO from '../constants/rush-info';

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
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 52px;
  line-height: 62px;
  color: ${PRIMARY_GREEN};
`;

const Bold = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -1px;
  margin: 16px 0px;
`;

const GreyText = styled.div`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #222222;
  opacity: 0.7;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 218px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;
  color: white;
  background-color: ${PRIMARY_GREEN};
`;

const VerticalBorder = styled.div`
  width: 0px;
  height: 66px;
  left: 680px;
  top: 523px;
  border: 1px solid #e0e0e0;
  margin: 36px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;

// eslint-disable-next-line react/prop-types
const Date = ({title, date, location, dress}) => (
  <div style={{display: 'flex', width: '400px', margin: '20px 0px'}}>
    <VerticalBorder
      style={{height: '120px', margin: '0px 12px', border: '2px solid #E0E0E0'}}
    />
    <div style={{display: 'flex', 'flex-direction': 'column'}}>
      <Bold style={{margin: '4px 0px'}}>{title}</Bold>
      <AccentText>{date}</AccentText>
      <Text>{location}</Text>
      <Text>{dress}</Text>
    </div>
  </div>
);

const Dates = () => (
  <div
    style={{
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      padding: '100px 300px',
    }}
  >
    <AccentText>- Come join us!</AccentText>
    <br />
    <Text>
      We encourage our brothers and sisters to jump headfirst into their
      passions without looking back.
    </Text>
    <Text>Are you an independent thinker? Want to carve your own path?</Text>
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'space-between',
        'flex-wrap': 'wrap',
        margin: '20px 0px',
      }}
    >
      {RUSH_INFO.map(({title, date, location, dress}) => (
        <Date title={title} date={date} location={location} dress={dress} />
      ))}
    </div>
    <Text>We will meet at the Bruin Bear 15 minutes before each event.</Text>
  </div>
);

// eslint-disable-next-line react/prop-types
const FacebookEventButton = ({tabIndex, margin = '32px'}) => (
  <a
    href="https://www.facebook.com/sigmaetapi"
    target="_blank"
    rel="noopener noreferrer"
    style={{'text-decoration': 'none', 'margin-top': `${margin}`}}
  >
    <Button role="button" tabIndex={tabIndex}>
      Come Rush
    </Button>
  </a>
);

const Main = () => (
  <div style={{display: 'flex', 'justify-content': 'space-between'}}>
    <MemberImage src={Left} alt="Members of Sigma Eta Pi" />
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        padding: '40px 120px',
      }}
    >
      <AccentText>- come join us!</AccentText>
      <Header>Recruitment</Header>
      <Bold>Fall Rush 2019&emsp;|&emsp;Sep 31st - Oct 3rd</Bold>
      <FacebookEventButton tabIndex={0} />
      <VerticalBorder />
      <GreyText>
        Although vastly diverse and widespread, our SEP family shares one
        distinct objective:
      </GreyText>
      <Bold>do what you love.</Bold>
    </div>
    <MemberImage src={Right} alt="Members of Sigma Eta Pi" />
  </div>
);

const FbLink = () => (
  <RecruitmentAdditionalSection
    title="event details"
    desc="For more details, check out our Facebook event page"
    isFb
  >
    <img
      style={{width: '100%', height: 'auto', margin: '24px 0'}}
      src={FbBanner}
      alt="Facebook Rush Event Banner with event details and dates."
    />
  </RecruitmentAdditionalSection>
);

const Sponsorship = () => (
  <RecruitmentAdditionalSection
    title="sponsorship"
    desc="A huge thank you to this year's sponsors!"
  >
    <>{/* Add sponsorship logos here */}</>
  </RecruitmentAdditionalSection>
);

// eslint-disable-next-line react/prop-types
const RecruitmentAdditionalSection = ({title, desc, isFb, children}) => (
  <div
    style={{
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      padding: '50px 100px',
      'border-top': '3px solid #F2F2F2',
      margin: '50px 200px',
    }}
  >
    <div style={{display: 'flex', 'justify-content': 'space-between'}}>
      <div>
        <AccentText>- {title}</AccentText>
        <Bold style={{margin: '10px 0px'}}>{desc}</Bold>
      </div>
      {isFb && <FacebookEventButton margin="0px" tabIndex={-1} />}
    </div>
    {children}
  </div>
);

const Video = () => (
  <div
    style={{
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    }}
  >
    <iframe
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsigmaetapi%2Fvideos%2F300640867460840%2F&show_text=0&width=1028"
      style={{border: 'none'}}
      width="1028"
      height="628"
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allowFullScreen="true"
      title="Recruitment Video"
    />
  </div>
);

const RecruitmentPage = () => (
  <PageLayout location="recruitment">
    <Main />
    <Dates />
    <Video />
    <FbLink />
    <Sponsorship />
  </PageLayout>
);

export default RecruitmentPage;
