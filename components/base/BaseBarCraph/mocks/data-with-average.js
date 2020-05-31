export const barGraphDataWithAverage = {
  labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Average',
      borderColor: '#F7C137',
      fill: false,
      lineTension: 0,
      data: [110, 80, 100, 110, 74, 55, 124],
      type: 'line',
    },
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Comfort',
      backgroundColor: '#2E5BFF',
      data: [82, 65, 75, 130, 55, 62, 120],
    },
    {
      barPercentage: 0.5,
      categoryPercentage: 0.3,
      label: 'Premium',
      backgroundColor: '#8C54FF',
      data: [90, 75, 80, 60, 45, 117],
    },
  ],
};
