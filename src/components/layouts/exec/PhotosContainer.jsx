import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlexGrid from '../../generic/FlexGrid';

import {BLACK, HEADER_FONT_SIZES} from '../../../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.m};
  color: ${BLACK};
`;

const PhotosContainer = ({title, children}) => {
  console.log(children);
  return (
    <Container>
      <Title>{title}</Title>
      <FlexGrid flexBasis="50%">{children}</FlexGrid>
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
