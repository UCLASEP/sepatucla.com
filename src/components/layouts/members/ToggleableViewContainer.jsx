/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {MARGINS, PRIMARY_GREEN} from '../../../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${MARGINS.l};
  margin-bottom: ${MARGINS.m};
`;

const ViewSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewSelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 218px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;

  ${props =>
    props.active &&
    css`
      color: white;
      background-color: ${PRIMARY_GREEN};
    `};
`;

const Border = styled.div`
  height: 3px;
  width: 25%;
  background-color: #f2f2f2;
`;

const ToggleableViewSelector = ({
  isLeftViewActive,
  setLeftView,
  leftText,
  rightText,
}) => {
  return (
    <ViewSelectorContainer>
      <Border />
      <ViewSelectorButton
        active={isLeftViewActive}
        onClick={() => setLeftView(true)}
        role="button"
        tabIndex={0}
      >
        {leftText}
      </ViewSelectorButton>
      <ViewSelectorButton
        active={!isLeftViewActive}
        onClick={() => setLeftView(false)}
        role="button"
        tabIndex={0}
      >
        {rightText}
      </ViewSelectorButton>
      <Border />
    </ViewSelectorContainer>
  );
};

ToggleableViewSelector.propTypes = {
  setLeftView: PropTypes.func.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  isLeftViewActive: PropTypes.bool.isRequired,
};

const ToggleableViewContainer = ({left, right, leftText, rightText}) => {
  const [isLeftOptionViewShowing, setLeftView] = useState(true);

  return (
    <Container>
      <ToggleableViewSelector
        isLeftViewActive={isLeftOptionViewShowing}
        setLeftView={isLeft => setLeftView(isLeft)}
        leftText={leftText}
        rightText={rightText}
      />
      {isLeftOptionViewShowing ? left : right}
    </Container>
  );
};

ToggleableViewContainer.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
};

export default ToggleableViewContainer;
