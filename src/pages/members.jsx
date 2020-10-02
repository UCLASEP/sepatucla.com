import React from 'react';
import styled from 'styled-components';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import FlexGrid from '../components/generic/FlexGrid';
import CallToAction from '../components/layouts/CallToAction';

import {MEMBERS} from '../constants/members';
import MemberLayout from '../components/layouts/members/MemberLayout';

import {MARGINS} from '../styles/global';
import FadeInSection from '../components/generic/FadeInSection';

const Container = styled.div`
  margin: 0 ${MARGINS.l};
  margin-bottom: ${MARGINS.m};

  @media (min-width: 1920px) {
    margin: 0 ${MARGINS.xl};
  }

  @media (min-width: 1450px) {
    margin: 0 200px;
  }

  @media (max-width: 1240px) {
    margin: 0;
  }
`;

const MembersGallery = () => (
  <Container>
    <FlexGrid
      style={{
        flexBasis: '20%',
      }}
    >
      {MEMBERS.map(member => (
        <FadeInSection>
          <MemberLayout member={member} />
        </FadeInSection>
      ))}
    </FlexGrid>
  </Container>
);
const MembersPage = () => (
  <PageLayout title="Members -- UCLA Sigma Eta Pi" location="actives">
    <PageHero
      miniTitle="brothers and sisters"
      title="Active Members"
      subtitle="Come for the entrepreneurship, stay for the friendship"
      blurb="If you ask many of us about what first drew us to SEP, many will initially tell you about why they chose entrepreneurship.<br/><br/>But if you dig a little deeper, you’ll come to see why many of us are still drawn to the community until today."
      heroImg="header-image-4x"
    />
    <MembersGallery />
    <CallToAction
      title="Be part of our fam. Come talk to us at rush!"
      buttonTitle="Recruitment"
      link="recruitment"
    />
  </PageLayout>
);

export default MembersPage;
