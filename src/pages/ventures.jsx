import React from 'react';

import styled from 'styled-components';
import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import VentureLayout from '../components/layouts/ventures/VentureLayout';
import ventureData from '../constants/active_inactive';
import VenturesContainer from '../components/layouts/ventures/PhotosContainer';

const Border = styled.div`
  height: 3px;
  width: 85%;
  background-color: #f2f2f2;
  margin: auto;
`;

const VenturesPage = () => (
  <PageLayout location="ventures">
    <PageHero
      miniTitle="companies we've started"
      title="Ventures"
      subtitle="Companies and projects that SEP-ers have started"
      blurb="We couldn’t be any more proud of our brothers and sisters– friends and mentors who’ve spent an incredible amount of effort and time dedicated to building the dreams and ideas you see below"
      heroImg="members/members-hero"
    />
    <VenturesContainer
      title="Active"
      subtitle="Companies and projects created by current actives or alumni that are still thriving today."
      miniTitle="- Featured"
    >
      {ventureData.FEATURED.map(featured => (
        <VentureLayout
          name={`${featured.firstname} ${featured.lastname}`}
          title={featured.title}
          key={`${featured.firstname} ${featured.lastname}`}
          desc={featured.desc}
          notPictured={featured.notPictured}
        />
      ))}
    </VenturesContainer>

    <Border />
    <VenturesContainer>
      {ventureData.ACTIVE.map(active => (
        <VentureLayout
          name={`${active.firstname} ${active.lastname}`}
          title={active.title}
          key={`${active.firstname} ${active.lastname}`}
          desc={active.desc}
          notPictured={active.notPictured}
        />
      ))}
    </VenturesContainer>

    <VenturesContainer
      title="Inactive/Closed"
      subtitle="Companies and projects that helped us grow and learn along the way"
    >
      {ventureData.INACTIVE.map(inactive => (
        <VentureLayout
          name={`${inactive.firstname} ${inactive.lastname}`}
          title={inactive.title}
          key={`${inactive.firstname} ${inactive.lastname}`}
          desc={inactive.desc}
          notPictured={inactive.notPictured}
        />
      ))}
    </VenturesContainer>
  </PageLayout>
);

export default VenturesPage;
