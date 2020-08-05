import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlexGrid from '../../generic/FlexGrid';

import {
  BLACK,
  HEADER_FONT_SIZES,
  MARGINS,
  GREY70,
  GREY40,
  TEXT_FONT_SIZES,
} from '../../../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${MARGINS.l};
  margin-bottom: ${MARGINS.m};
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.m};
  color: ${BLACK};
  letter-spacing: -1px;
  margin-bottom: ${MARGINS.s};
  font-weight: 600;
`;

const Subtitle = styled.div`
  font-size: ${TEXT_FONT_SIZES.m};
  color: ${GREY70};
  line-height: 1.56;
  margin-bottom: 70px;
`;

const MiniTitle = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: 500;
  letter-spacing: 4px;
  color: ${GREY40};
  text-transform: uppercase;
  margin: ${MARGINS.xs} 0;
`;

const PhotosContainer = ({title, subtitle, miniTitle, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <MiniTitle>{miniTitle}</MiniTitle>
      <FlexGrid
        style={{
          flexBasis: '25%',
          height: '250px',
          width: '250px',
          marginBottom: '128px',
        }}
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
  miniTitle: PropTypes.string,
};

PhotosContainer.defaultProps = {
  title: '',
  subtitle: '',
  miniTitle: '',
};

export default PhotosContainer;
