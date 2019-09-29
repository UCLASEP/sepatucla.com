import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';

const ExecPage = () => (
  <PageLayout>
    <PageHero
      miniTitle="leadership"
      title="Executive Board"
      subtitle="The team behind the magic"
      blurb="Our executive board is composed of a group of driven and fun-loving individuals who have willingly stepped up to give back to SEP.<br/><br/> A number of us have been on the board for more than three years, while some of us have excitingly joined the board for the first time."
      heroImg="exec/exec-hero"
    />
  </PageLayout>
);

export default ExecPage;
