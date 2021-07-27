import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ options, series }) => (
    <Chart
        options={options}
        series={series}
        type='bar'
        width={800}
    />
);

export default BarChart;
