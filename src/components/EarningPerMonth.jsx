// Path: src/components/EarningPerMonth.jsx

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';
import './EarningPerMonth.css';

// Mock data for yearly earnings (12 months per year)
const mockEarningData = {
  2022: [2000, 2200, 3100, 2800, 4000, 3600,3000, 3300, 3400, 3900, 4200, 1600],
  2023: [1800, 2100, 2400, 3000, 3100, 2800, 1500, 1700, 2200, 2700, 3100, 3300],
  2024: [1500, 1700, 2200, 2700, 3100, 3300, 2000, 2200, 3100, 2800, 4000, 3600],
  2025: [3000, 3300, 3400, 3900, 0, 0, 0, 0, 0, 0, 0, 0],
};

// List of month names
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const EarningPerMonth = () => {
  const availableYears = Object.keys(mockEarningData);

  // Default year is unselected
  const [selectedYear, setSelectedYear] = useState('');

  // Get earnings data or default to zeroes
  const earnings = mockEarningData[selectedYear] || new Array(12).fill(0);

  // Combine month names with earnings
  const chartData = months.map((month, index) => ({
    month,
    earning: earnings[index],
  }));

  return (
    <div className="earning-container">
      {/* Chart section title */}
      {/* <h2 className="section-title">Earning / Month</h2> */}

      {/* Year dropdown selector */}
      <div className="year-dropdown-centered">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="year-select-bw"
        >
          <option value="">Choose a year</option>
          {availableYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Earnings bar chart */}
      <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={chartData}
    barCategoryGap="25%" // more spacing between bars
    margin={{ top: 10, right: 0, left: 10, bottom: 40 }}
  >
    {/* Grid lines */}
    <CartesianGrid vertical={false} stroke="#000" strokeWidth={1} />

    {/* X-axis with 'Month' label */}
    <XAxis
      dataKey="month"
      tick={{ fontSize: 13, fontFamily: 'Ubuntu', fill: '#000' }}
      angle={-45}
      textAnchor="end"
      interval={0}
    >
      <Label
        value="Month"
        offset={30}
        position="bottom"
        style={{ fill: '#000', fontFamily: 'Ubuntu', fontSize: 14 }}
      />
    </XAxis>

    {/* Y-axis with 'SAR' label on the left side */}
    <YAxis
  axisLine={{ stroke: '#000', strokeWidth: 3 }}
  tick={{ fontSize: 13, fill: '#000' }}
  tickLine={false}
  tickFormatter={(value) => `${value}`}
>
  {/* Horizontally positioned SAR label at the base of the Y-axis */}
  <Label
    value="SAR"
    position="bottom"
    offset={-114} 
    dx={-27}      
    style={{
      fill: '#000',
      fontFamily: 'Ubuntu',
      fontSize: 14,
      textAnchor: 'middle'
    }}
  />
</YAxis>

    {/* Tooltip on hover */}
    <Tooltip
      wrapperStyle={{ fontSize: '13px', fontFamily: 'Ubuntu' }}
      formatter={(value) => [`${value} SAR`, 'Earning']}
    />

    {/* Bars for earnings */}
    <Bar
      dataKey="earning"
      fill="#000"
      radius={[0, 0, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>

      </div>
    </div>
  );
};

export default EarningPerMonth;
