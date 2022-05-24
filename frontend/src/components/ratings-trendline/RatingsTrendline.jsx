/* eslint-disable no-unused-vars */
import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function RatingsTrendline(props) {
	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
	];

	const reviewTrend = props.reviewTrend.split(',');
	const competitorTrend = props.competitorTrend.split(',');

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Your Business',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: reviewTrend,
			},
			{
				label: 'Other Businesses of the same category',
				backgroundColor: 'rgb(109, 19, 70)',
				borderColor: 'rgb(109, 19, 70)',
				data: competitorTrend,
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
