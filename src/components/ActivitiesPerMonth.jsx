// Path: src/components/ActivitiesPerMonth.jsx

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
import './EarningPerMonth.css'; // Reuse styles for consistency

const mockActivityData = {
  2022: [22, 27, 31, 30, 28, 26, 24, 20, 25, 23, 21, 19],
  2023: [15, 18, 21, 25, 27, 22, 19, 24, 29, 20, 18, 16],
  2024: [10, 12, 14, 18, 22, 30, 28, 27, 26, 25, 23, 20],
  2025: [17, 19, 22, 20, 0, 0, 0, 0, 0, 0, 0, 0],
};

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const ActivitiesPerMonth = () => {
  const availableYears = Object.keys(mockActivityData);
  const [selectedYear, setSelectedYear] = useState('');

  const activities = mockActivityData[selectedYear] || new Array(12).fill(0);

  const chartData = months.map((month, index) => ({
    month,
    activityCount: activities[index],
  }));

  return (
    <div className="earning-container">
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

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            barCategoryGap="25%"
            margin={{ top: 10, right: 0, left: 10, bottom: 40 }}
          >
            <CartesianGrid vertical={false} stroke="#000" strokeWidth={1} />
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
            <YAxis
              axisLine={{ stroke: '#000', strokeWidth: 3 }}
              tick={{ fontSize: 13, fill: '#000' }}
              tickLine={false}
              tickFormatter={(value) => `${value}`}
            >
              <Label
                value="Activities"
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
            <Tooltip
              wrapperStyle={{ fontSize: '13px', fontFamily: 'Ubuntu' }}
              formatter={(value) => [`${value} activities`, 'Count']}
            />
            <Bar
              dataKey="activityCount"
              fill="#000"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivitiesPerMonth;
