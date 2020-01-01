import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const Item = styled.div`
  height: 250px;
  flex-basis: 20%;
  width: 250px;
  position: relative;
  /* padding: 10px; */
  box-sizing: border-box;
`;

const GridItem = ({children, flexBasis}) => (
  <Item style={{flexBasis: `${flexBasis}`}}>{children}</Item>
);

GridItem.propTypes = {
  children: PropTypes.element.isRequired,
  flexBasis: PropTypes.string.isRequired,
};

const FlexGrid = ({children, flexBasis}) => (
  <Grid>
    {children.map(item => (
      <GridItem flexBasis={flexBasis}>{item}</GridItem>
    ))}
  </Grid>
);

FlexGrid.propTypes = {
  flexBasis: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

FlexGrid.defaultProps = {
  flexBasis: '20%',
};

export default FlexGrid;
