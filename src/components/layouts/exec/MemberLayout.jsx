/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HEADER_FONT_SIZES,
  TEXT_FONT_SIZES,
  BLACK,
  GREY40,
} from '../../../styles/global';

const Container = styled.div`
  display: flex;
`;

const MemberPhoto = styled.img`
  width: 235px;
  height: 235px;
`;

const Name = styled.div`
  font-size: ${HEADER_FONT_SIZES.s};
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZES.xs};
  font-weight: bold;
  color: ${GREY40};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: ${TEXT_FONT_SIZES.s};
  color: ${GREY40};
`;

const MemberLayout = ({name, title, desc}) => (
  <Container>
    <MemberPhoto
      src={require(`../../../../assets/images/brothers/${name
        .split(' ')
        .join('')
        .toLowerCase()}_opt.jpg`)}
    />
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </div>
  </Container>
);

MemberLayout.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MemberLayout;
