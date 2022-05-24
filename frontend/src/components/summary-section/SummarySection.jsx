import * as React from 'react';
import { Sparkline } from 'mui-plus';
import { Stack, Card, Typography, CardContent } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import WarningIcon from '@material-ui/icons/Warning';
import './SummarySection.css';

const data1 = [
	11, 15, 21, 31, 37, 16, 17, 8, 18, 37, 28, 31, 22, 30, 8, 31, 14, 4, 36, 34,
	2, 26, 35, 17, 2, 19, 1, 30, 2, 16, 23, 35, 1, 14, 33,
];

const data2 = [
	23, 5, 36, 14, 8, 18, 22, 29, 6, 23, 20, 2, 16, 8, 38, 10, 15, 38, 17, 13,
	14, 7, 3, 39, 24, 13, 38, 25, 21, 14, 28, 31, 14, 8, 4,
];

function TrendDetails({ title, value, data, change }) {
	const TrendingIcon = change < 0 ? TrendingDownIcon : TrendingUpIcon;
	const color = change < 0 ? 'error' : 'primary';
	return (
		<Stack direction="column">
			<Typography variant="subtitle2">{title}</Typography>
			<Typography variant="h4">{value}</Typography>
			<Typography>
				<TrendingIcon sx={{ verticalAlign: 'middle' }} color={color} />{' '}
				{`${change < 0 ? '' : '+'}${change}%`}
			</Typography>
			<Typography></Typography>
			<Sparkline sx={{ mt: 2 }} data={data} color={color} />
		</Stack>
	);
}

export default function SummarySection({ summary }) {
	return (
		<div className="summary-section">
			<Stack spacing={5} direction="row">
				<Card>
					<CardContent>
						<Stack direction="row" spacing={5}>
							<TrendDetails
								title="Positive"
								value={`${summary.positive_metric}%`}
								change={summary.positive_change}
								data={data1}
							/>
							<TrendDetails
								title="Negative"
								value={`${summary.negative_metric}%`}
								change={summary.negative_change}
								data={data2}
							/>
						</Stack>
					</CardContent>
				</Card>

				<Card>
					<CardContent>
						<Stack direction="column">
							<Typography variant="subtitle2">
								Engagement
							</Typography>
							<Typography color="error" variant="h4">
								{`${summary.engagement}% `}
								<WarningIcon
									sx={{ position: 'relative', bottom: -3 }}
								/>
							</Typography>
							<Typography>Below forecast</Typography>
							<Sparkline
								sx={{ mt: 2 }}
								data={data2}
								color="error"
							/>
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</div>
	);
}
