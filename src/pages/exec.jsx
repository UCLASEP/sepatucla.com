import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import PhotosContainer from '../components/layouts/exec/PhotosContainer';
import MemberLayout from '../components/layouts/exec/MemberLayout';

import execData from '../constants/exec';

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
      {execData.PRESIDENTS.map(pres => (
        <MemberLayout
          name={`${pres.firstname} ${pres.lastname}`}
          title={pres.title}
          key={`${pres.firstname} ${pres.lastname}`}
          desc={pres.desc}
          notPictured={pres.notPictured}
        />
      ))}
    </PhotosContainer>
    <PhotosContainer title="Directors">
      {execData.DIRECTORS.map(director => (
        <MemberLayout
          name={`${director.firstname} ${director.lastname}`}
          title={director.title}
          key={`${director.firstname} ${director.lastname}`}
          desc={director.desc}
          notPictured={director.notPictured}
        />
      ))}
    </PhotosContainer>
  </PageLayout>
);

export default ExecPage;
