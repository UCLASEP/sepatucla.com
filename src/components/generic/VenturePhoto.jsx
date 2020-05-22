/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Photo = styled.img`
  height: 135px;
`;

const VenturePhoto = ({name, notPictured}) => {
  return (
    <Photo
      src={require(`../../../assets/images/venture_final/${
        notPictured
          ? 'icons/notpictured_opt.jpg'
          : `${name
              .toLowerCase()}.jpg`
      }`)}
    />
  );
};

VenturePhoto.propTypes = {
  name: PropTypes.string.isRequired,
  notPictured: PropTypes.bool,
};

VenturePhoto.defaultProps = {
  notPictured: false,
};

export default VenturePhoto;
