import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const allMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Chart = ({ data }) => {
  const chartData = allMonths.map((month) => ({
    name: month.slice(0, 3), // Display only first 3 characters of the month name
    applications: data[month] || 0,
  }));

  return (
    <ResponsiveContainer>
      <BarChart
        data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="applications" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;