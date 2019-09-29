import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';

const VenturesPage = () => (
  <PageLayout location="ventures">
    <PageHero
      miniTitle="companies we've started"
      title="Ventures"
      subtitle="Companies and projects that SEP-ers have started"
      blurb="We couldn’t be any more proud of our brothers and sisters– friends and mentors who’ve spent an incredible amount of effort and time dedicated to building the dreams and ideas you see below."
      heroImg="members/members-hero"
    />
  </PageLayout>
);

export default VenturesPage;
