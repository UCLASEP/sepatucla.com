/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styled, {css} from 'styled-components';
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

  ${props =>
    !props.exec &&
    css`
      @media (max-width: 450px) {
        width: 150px;
        height: auto;
      }
    `}
`;

const MemberPhoto = ({exec, name, notPictured}) => {
  return (
    <Photo
      exec={exec}
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
  exec: PropTypes.bool,
  name: PropTypes.string.isRequired,
  notPictured: PropTypes.bool,
};

MemberPhoto.defaultProps = {
  exec: false,
  notPictured: false,
};

export default MemberPhoto;
