import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlexGrid from '../../generic/FlexGrid';

import {BLACK, HEADER_FONT_SIZES, MARGINS} from '../../../styles/global';

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

const PhotosContainer = ({title, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlexGrid
        style={{
          flexBasis: '50%',
          height: '250px',
          width: '250px',
          marginBottom: '48px',
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
};

PhotosContainer.defaultProps = {
  title: '',
};

export default PhotosContainer;
