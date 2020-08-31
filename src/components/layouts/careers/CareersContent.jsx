import React from 'react';
import styled from 'styled-components';

import INDUSTRIES from '../../../constants/careers';
import IndustryContainer from './IndustryContainer';

import {MARGINS} from '../../../styles/global';

const CareersContent = () => (
  <Container>
    {INDUSTRIES.map(industry => {
      const {name, desc, logos} = industry;
      return <IndustryContainer name={name} desc={desc} logos={logos} />;
    })}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: ${MARGINS.l};
`;
export default CareersContent;
