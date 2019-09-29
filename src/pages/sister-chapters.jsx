import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';

const SisterChaptersPage = () => (
  <PageLayout location="sisters">
    <PageHero
      miniTitle="other chapters"
      title="Sister Chapters"
      subtitle="Start a conversation"
      blurb="Interested in starting a chapter at your school? Let’s talk.<br/>Email us at president@sigmaetapi.com."
      heroImg="members/members-hero"
    />
  </PageLayout>
);

export default SisterChaptersPage;
