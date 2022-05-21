/* eslint-disable no-unused-vars */
import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function RatingsTrendline() {
	const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Your Business',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: 'Other Businesses of the same category',
				backgroundColor: 'rgb(109, 19, 70)',
				borderColor: 'rgb(109, 19, 70)',
				data: [0, 20, 15, 0, 10, 40, 65],
			},
		],
	};

	const config = {
		type: 'line',
		data: data,
		options: {},
	};

	return <Line datasetIdKey="id" data={data} />;
}
