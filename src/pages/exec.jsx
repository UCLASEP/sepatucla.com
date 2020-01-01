import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import PhotosContainer from '../components/layouts/exec/PhotosContainer';
import MemberLayout from '../components/layouts/exec/MemberLayout';

const ExecPage = () => (
  <PageLayout location="exec">
    <PageHero
      miniTitle="leadership"
      title="Executive Board"
      subtitle="The team behind the magic"
      blurb="Our executive board is composed of a group of driven and fun-loving individuals who have willingly stepped up to give back to SEP.<br/><br/> A number of us have been on the board for more than three years, while some of us have excitingly joined the board for the first time."
      heroImg="exec/exec-hero"
    />
    <PhotosContainer title="Presidents">
      <MemberLayout
        name="Nishanth Shetty"
        title="President"
        desc="Nish is a 4th year Statistics major. He is working at Deloitte this summer as an investment banking intern. He is obsessed with Liverpool and having really engaging deep conversations."
      />
      <MemberLayout
        name="Alissa Niewiadomski"
        title="President"
        desc="Nish is a 4th year Statistics major. He is working at Deloitte this summer as an investment banking intern. He is obsessed with Liverpool and having really engaging deep conversations."
      />
    </PhotosContainer>
  </PageLayout>
);

export default ExecPage;
