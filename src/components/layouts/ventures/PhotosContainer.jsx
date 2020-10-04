import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlexGrid from '../../generic/FlexGrid';

import {
  BLACK,
  HEADER_FONT_SIZES,
  MARGINS,
  GREY70,
  TEXT_FONT_SIZES,
} from '../../../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${MARGINS.m};
  margin-bottom: ${MARGINS.m};

  @media (max-width: 600px) {
    margin: 24px;
  }
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.m};
  color: ${BLACK};
  letter-spacing: -1px;
  margin-bottom: ${MARGINS.s};
  font-weight: 600;

  @media (max-width: 1100px) {
    font-size: ${HEADER_FONT_SIZES.s};
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  color: ${GREY70};
  line-height: 1.56;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: ${TEXT_FONT_SIZES.s};
  }
`;

// const MiniTitle = styled.div`
//   font-size: 16px;
//   font-weight: 500;
//   letter-spacing: 4px;
//   color: ${GREY40};
//   text-transform: uppercase;
//   margin: 32px 148px;
// `;

const PhotosContainer = ({title, subtitle, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <FlexGrid
        style={{
          flexBasis: '25%',
          height: 'auto',
        }}
        // includeMiniTitle={<MiniTitle>{miniTitle}</MiniTitle>}
      >
        {children}
      </FlexGrid>
    </Container>
  );
};

PhotosContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  subtitle: PropTypes.string,
};

PhotosContainer.defaultProps = {
  title: '',
  subtitle: '',
};

export default PhotosContainer;
