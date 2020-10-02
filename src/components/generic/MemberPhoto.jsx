/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Photo = styled.img`
  /* width: 235px; */
  height: 235px;

  @media (min-width: 1920px) {
    height: 400px;
  }

  @media (min-width: 1450px) {
    height: 300px;
  }

  @media (max-width: 1300px) {
    height: 210px;
  }

  @media (max-width: 600px) {
    width: 210px;
  }
`;

const MemberPhoto = ({name, notPictured}) => {
  return (
    <Photo
      src={require(`../../../assets/images/brothers/${
        notPictured
          ? 'icons/notpictured_opt.jpg'
          : `${name
              .split(' ')
              .join('')
              .toLowerCase()}_opt.jpg`
      }`)}
    />
  );
};

MemberPhoto.propTypes = {
  name: PropTypes.string.isRequired,
  notPictured: PropTypes.bool,
};

MemberPhoto.defaultProps = {
  notPictured: false,
};

export default MemberPhoto;
