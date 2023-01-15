import { Tooltip } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { data } from '../mocks/ChartsMock';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  chartsContainer: {
    padding: 20,
    display: 'flex',
    flex: 4,
    justifyContent: 'space-between',
    marginRight: 15,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    borderRadius: 5,
    flexDirection: 'column',
  },
  chartsTitle: {
    color: '#bcbaba',
    marginBottom: 60,
  },
});

const Charts = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.chartsContainer}>
      <h4 className={classes.chartsTitle}>{title}</h4>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke='lightgrey' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='total'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Charts.propTypes = {
  title: PropTypes.string,
};

export default Charts;
