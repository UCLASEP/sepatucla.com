/* eslint-disable */

import React from 'react';
import {themeVariables} from '../FO/resources/styles/theme-variables';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('Large CTA Button', () => createTable(largeCTAButtonInfo));
/*
export default {
  title: 'Buttons',
};

export const LargeCTAButton = () => (createTable(largeCTAButtonInfo));*/

function createData(name, style, usage, todo, doNot) {
  return {name, style, usage, todo, doNot};
}

/*
const largeCTAButtons = [
  createData('Enabled Button', <Button style = {buttonStyles.largeCtaActive}>Button</Button>, '', '', ''),
  createData('Hover Button', <button style = {buttonStyles.largeCtaHover}>Button</button>, '', '', ''),
  createData('Clicked Button',<button style = {buttonStyles.largeCtaClicked}>Button</button>,'', '', '')
];*/

const largeCTAButtonInfo = [
  createData('Enabled Button', '0', '', '', ''),
  createData('Passive Button', '1', '', '', ''),
  createData('Disabled Button', '2', '', '', ''),
];

/*const buttons = [
<button style = {buttonStyles.largeCtaActive}>Button</button>, 
<button style = {buttonStyles.largeCtaHover}>Button</button>,
<button style = {buttonStyles.largeCtaClicked}>Button</button>];*/

function createTable(rows) {
  console.log('here');
  const buttons = [
    <button
      style={object('Large CTA Active style', buttonStyles.largeCtaActive)}
    >
      {text('Active CTA Text', 'Button')}
    </button>,
    <button
      style={object('Large CTA Passive style', buttonStyles.largeCtaPassive)}
    >
      {text('Passive CTA Text', 'Button')}
    </button>,
    <button
      style={object('Large CTA Disabled style', buttonStyles.largeCtaDisabled)}
    >
      {text('Disabled CTA Text', 'Button')}
    </button>,
  ];
  return (
    <Paper>
      <Table label="Large Call-To-Action Buttons">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Main use</TableCell>
            <TableCell align="left">Do</TableCell>
            <TableCell align="left">Don't</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} scope="row">
              <TableCell component="th">{buttons[row.style]}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.usage}</TableCell>
              <TableCell align="left">{row.todo}</TableCell>
              <TableCell align="left">{row.doNot}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

/*
let buttonStyles = {
  largeCtaActive: {
    display: 'flex',
    alignItems: 'center',
    height: '42px',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '15px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    borderRadius: '38px',
    backgroundColor: '#F4DA22',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color:'#271D38',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    padding: '0px 15px',
    textTransform: 'capitalize',
    border: '2px solid ' + '#FFFFFF',
    '& .MuiSvgIcon-root': {
        width: '12px',
        height: '12px',
        marginRight: '6px'
    }
},
largeCtaPassive: {
  display: 'flex',
  alignItems: 'center',
  height: '42px',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  fontSize: '15px',
  fontStyle: 'normal',
  fontStretch: 'normal',
  borderRadius: '38px',
  backgroundColor: themeVariables.colors.white,
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: themeVariables.colors.primaryBrandColor,
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  padding: '0px 15px',
  textTransform: 'capitalize',
  border: '2px solid ' + themeVariables.colors.primaryBrandColor,
  '& .MuiSvgIcon-root': {
      width: '12px',
      height: '12px',
      marginRight: '6px'
  },
  '&:hover': {
      backgroundColor: themeVariables.colors.white
  }
},
largeCtaDisabled: {
  display: 'flex',
  alignItems: 'center',
  height: '42px',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  fontSize: '15px',
  fontStyle: 'normal',
  fontStretch: 'normal',
  borderRadius: '38px',
  backgroundColor: themeVariables.colors.deactivatedColor,
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: themeVariables.colors.white,
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  padding: '0px 15px',
  textTransform: 'capitalize',
  border: '2px solid ' + themeVariables.colors.white,
  '& .MuiSvgIcon-root': {
      width: '12px',
      height: '12px',
      marginRight: '6px'
  },
  '&:hover': {
      backgroundColor: themeVariables.colors.deactivatedColor
  }
}
};*/
