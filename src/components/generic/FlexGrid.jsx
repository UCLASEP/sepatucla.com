import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Item = styled.div`
  flex-basis: 20%;
  position: relative;
  /* padding: 10px; */
  box-sizing: border-box;
`;

const GridItem = ({children, style}) => <Item style={style}>{children}</Item>;

GridItem.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.shape({}).isRequired,
};

const FlexGrid = ({children, style, includeMiniTitle}) => (
  <>
    {includeMiniTitle && includeMiniTitle}
    <Grid>
      {children.map(item => (
        <GridItem style={style}>{item}</GridItem>
      ))}
    </Grid>
  </>
);

FlexGrid.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  includeMiniTitle: PropTypes.object,
};

FlexGrid.defaultProps = {
  style: {},
  includeMiniTitle: null,
};

export default FlexGrid;
