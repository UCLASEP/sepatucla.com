import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';

const MembersPage = () => (
  <PageLayout>
    <PageHero
      miniTitle="brothers and sisters"
      title="Active Members"
      subtitle="Come for the entrepreneurship, stay for the friendship"
      blurb="If you ask many of us about what first drew us to SEP, many will initially tell you about why they chose entrepreneurship.<br/><br/>But if you dig a little deeper, you’ll come to see why many of us are still drawn to the community until today."
      heroImg="members/members-hero"
    />
  </PageLayout>
);

export default MembersPage;
