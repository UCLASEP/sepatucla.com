import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationLink from './NavigationLink';

import {PADDING, PRIMARY_GREEN, HOVER_GREEN, GREY80} from '../styles/global';

export default class NavigationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);

    this.state = {
      isHovering: false,
    };
  }

  handleHover = () => {
    this.setState({isHovering: true});
  };

  handleLeave = () => {
    this.setState({isHovering: false});
  };

  getNature = () => {
    const {isHovering} = this.state;
    const {activePage, options} = this.props;
    const isActive = options.map(o => o.slug).includes(activePage);

    if (isHovering) return 'hover';
    if (isActive) return 'active';
    return 'default';
  };

  render() {
    const {isHovering} = this.state;
    const {text, options, activePage} = this.props;
    return (
      <NavigationDropdownOption onMouseLeave={this.handleLeave}>
        <OptionText
          nature={this.getNature()}
          isHovering={isHovering}
          isActive={options.map(o => o.slug).includes(activePage)}
          onMouseEnter={this.handleHover}
        >
          {text}
        </OptionText>
        {isHovering && (
          <Submenu className="nav__submenu">
            {options.map(option => (
              <NavigationLink
                key={option.to}
                to={option.to}
                isActive={activePage === option.slug}
                linkText={option.linkText}
              />
            ))}
          </Submenu>
        )}
      </NavigationDropdownOption>
    );
  }
}

NavigationDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.shape.isRequired,
  activePage: PropTypes.string.isRequired,
};

const Submenu = styled.div`
  display: none;
  position: absolute;
  padding: ${PADDING.m};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  flex-direction: column;
  width: 160px;

  top: 28px;
  left: 10px;
`;

const NavigationDropdownOption = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    .nav__submenu {
      display: flex;
    }
  }
`;

const optionTextColors = {
  hover: HOVER_GREEN,
  active: PRIMARY_GREEN,
  default: GREY80,
};

const OptionText = styled.div`
  display: block;
  padding: 0 16px;
  margin: 32px;
  line-height: inherit;
  cursor: pointer;
  color: ${props => optionTextColors[props.nature]};
`;
