/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Photo = styled.img`
  /* width: 235px; */
  height: 235px;
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
