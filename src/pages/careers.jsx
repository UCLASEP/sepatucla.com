import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';

const CareersPage = () => (
  <PageLayout location="careers">
    <PageHero
      miniTitle="where we've worked"
      title="Careers"
      subtitle="Entrepreneur, or intrapreneur?"
      blurb="An intrapreneur strives to create a culture innovative product development within an organization.<br/><br/>Our actives and alumni have done meaningful and impactful work at various companies across the world."
      heroImg="members/members-hero"
    />
  </PageLayout>
);

export default CareersPage;
