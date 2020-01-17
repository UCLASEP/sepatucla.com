import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import ToggleableViewContainer from '../components/layouts/members/ToggleableViewContainer';
import FlexGrid from '../components/generic/FlexGrid';

import {MEMBERS} from '../constants/members';
import MemberLayout from '../components/layouts/members/MemberLayout';

const MembersGallery = () => (
  <FlexGrid
    style={{
      flexBasis: '20%',
    }}
  >
    {MEMBERS.map(member => (
      <MemberLayout member={member} />
    ))}
  </FlexGrid>
);
const MembersPage = () => (
  <PageLayout location="actives">
    <PageHero
      miniTitle="brothers and sisters"
      title="Active Members"
      subtitle="Come for the entrepreneurship, stay for the friendship"
      blurb="If you ask many of us about what first drew us to SEP, many will initially tell you about why they chose entrepreneurship.<br/><br/>But if you dig a little deeper, you’ll come to see why many of us are still drawn to the community until today."
      heroImg="members/members-hero"
    />
    <ToggleableViewContainer
      left={<MembersGallery />}
      right={<div>right</div>}
      leftText="members"
      rightText="memories"
    />
  </PageLayout>
);

export default MembersPage;
