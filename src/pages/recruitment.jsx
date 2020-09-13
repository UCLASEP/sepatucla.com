import React from 'react';
import styled from 'styled-components';

import PageLayout from '../components/layouts/PageLayout';

import Left from '../../assets/images/recruitment/left.png';
import Right from '../../assets/images/recruitment/right.png';

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

const ViewSelectorButton = styled.div`
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
      <Bold>Fall Rush 2019 | Sep 31st - Oct 3rd</Bold>
      <a
        href="https://www.facebook.com/sigmaetapi"
        target="_blank"
        rel="noopener noreferrer"
        style={{'text-decoration': 'none', 'margin-top': '32px'}}
      >
        <ViewSelectorButton role="button" tabIndex={0}>
          Come Rush
        </ViewSelectorButton>
      </a>
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

const RecruitmentPage = () => (
  <PageLayout location="recruitment">
    <Main />
    <Dates />
  </PageLayout>
);

export default RecruitmentPage;
