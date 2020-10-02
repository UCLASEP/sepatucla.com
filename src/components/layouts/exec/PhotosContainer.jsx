import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlexGrid from '../../generic/FlexGrid';

import {BLACK, HEADER_FONT_SIZES, MARGINS} from '../../../styles/global';

import useWindowWidth from '../../../util/useWindowWidth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${MARGINS.l};
  margin-bottom: ${MARGINS.m};

  @media (max-width: 1300px) {
    margin: 0 ${MARGINS.m};
  }

  @media (max-width: 1080px) {
    margin: 0 ${MARGINS.l};
  }

  @media (max-width: 880px) {
    margin: 0 ${MARGINS.m};
  }
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.m};
  color: ${BLACK};
  letter-spacing: -1px;
  margin-bottom: 30px;
  font-weight: 600;
`;

const PhotosContainer = ({title, children}) => {
  const windowWidth = useWindowWidth();
  let style = {
    flexBasis: '50%',
    height: '250px',
    width: '250px',
    marginBottom: '48px',
  };

  if (windowWidth < 1080) {
    style = {
      ...style,
      flexBasis: '100%',
    };
  }

  if (windowWidth < 600) {
    style = {
      ...style,
      flexBasis: '100%',
      height: 'auto',
    };
  }

  if (windowWidth < 450) {
    style = {
      ...style,
      flexBasis: '100%',
      height: 'auto',
    };
  }

  return (
    <Container>
      <Title>{title}</Title>
      <FlexGrid style={style}>{children}</FlexGrid>
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
